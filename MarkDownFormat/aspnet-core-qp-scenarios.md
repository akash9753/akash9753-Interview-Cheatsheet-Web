# 6 Real ASP.NET Core Scenarios (QP WhatsApp)

## Goal

Six real ASP.NET Core scenario questions from the QP WhatsApp group — with the correct answers and short interview notes.

---

## Topic Index

<ul>
  <li><a href="#q1">Question 1 — Shared query-param validation</a></li>
  <li><a href="#q2">Question 2 — Client flooding the API</a></li>
  <li><a href="#q3">Question 3 — Cache stampede / Redis miss storm</a></li>
  <li><a href="#q4">Question 4 — N+1 queries</a></li>
  <li><a href="#q5">Question 5 — Order saved, event never published</a></li>
  <li><a href="#q6">Question 6 — CSRF on cookie-based login</a></li>
</ul>

---

<a id="q1"></a>

## Question 1 — Shared query-param validation

**Scenario:** You have an ASP.NET Core Web API with 25 endpoints. 12 of them need a URL query parameter checked before the endpoint does anything else. Where should that validation go?

**Correct answer:** Add a **resource filter** to validate it.

**Why:** A resource filter runs after model binding and before the action. Apply it only to the 12 endpoints that need the check — shared logic without repeating validation in every action.

> **One-liner:** Shared pre-action validation across selected endpoints → resource filter.

---

<a id="q2"></a>

## Question 2 — Client flooding the API

**Scenario:** A client calls your ASP.NET Core API 500 times a minute. It's slowing down every other client. What's the easiest fix?

**Correct answer:** Turn on **rate limiting** for that API.

**Why:** Rate limiting caps how many requests a client can make in a time window. It’s the simplest way to protect other clients without rewriting business logic.

> **One-liner:** One noisy client slowing everyone → enable rate limiting.

---

<a id="q3"></a>

## Question 3 — Cache stampede / Redis miss storm

**Scenario:** Your ASP.NET Core API caches a price in Redis. The cache entry expires. 200 requests hit the API in the same second. All 200 miss Redis and hit the database at once. What's the best fix?

**Correct answer:** Use ASP.NET Core's **HybridCache**. It lets only one request refill Redis.

**Why:** On expiry, many concurrent misses cause a stampede. HybridCache coordinates so one request rebuilds the cache while others wait for that result.

> **One-liner:** Cache expiry + many concurrent misses → HybridCache (single refill).

---

<a id="q4"></a>

## Question 4 — N+1 queries

**Scenario:** Your ASP.NET Core API returns 100 orders. For each order, it fetches that order's customer record with a separate query. That's 101 queries for one request. What's the best fix?

**Correct answer:** Load orders and customers in **one query**, using EF Core's `Include`.

**Why:** Looping with one query per child is the classic N+1 problem. `Include` (or a projection join) loads related data in fewer round-trips.

> **One-liner:** 1 parent query + N child queries → EF Core `Include` / projection.

---

<a id="q5"></a>

## Question 5 — Order saved, event never published

**Scenario:** Your ASP.NET Core API saves an order to the database, then publishes an `OrderPlaced` event to a message queue. The API crashes between the two steps. The order exists, but the event was never sent. What's the best fix?

**Correct answer:** Save the order and the event to an **outbox table**, in **one transaction**. A separate process reads that table and publishes the event to the queue.

**Why:** Database write + queue publish are not atomic. The transactional outbox keeps both in the same DB transaction; a background worker publishes reliably afterward.

> **One-liner:** DB commit + queue publish can split → transactional outbox.

---

<a id="q6"></a>

## Question 6 — CSRF on cookie-based login

**Scenario:** Your ASP.NET Core app uses cookie-based login. A form on your site lets a logged-in client transfer money. A malicious website tricks that client's browser into submitting the same form, without the client knowing. What's the best fix?

**Correct answer:** Add **antiforgery token** validation to the form.

**Why:** This is CSRF. Cookies are sent automatically by the browser. An antiforgery token proves the request came from your page, not a third-party site.

> **One-liner:** Cookie auth + cross-site form post → antiforgery tokens.

---

## Quick cheat sheet

| # | Problem | Correct fix |
| --- | --- | --- |
| 1 | Same query param check on 12 endpoints | Resource filter |
| 2 | One client floods the API | Rate limiting |
| 3 | Redis expiry → 200 DB hits at once | HybridCache (single refill) |
| 4 | 100 orders → 101 queries | EF Core `Include` |
| 5 | Order saved, event never published | Transactional outbox |
| 6 | Malicious site submits logged-in form | Antiforgery token |
