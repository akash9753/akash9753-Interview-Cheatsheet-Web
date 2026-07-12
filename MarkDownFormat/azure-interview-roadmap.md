<h1 style="color:#2563eb;">Azure Learning Roadmap for Interview Preparation</h1>

## Goal

<p style="color:#374151;">
This roadmap is focused on <strong style="color:#16a34a;">Microsoft Azure interview preparation</strong> — core services, architecture, security, and operational concepts.
</p>

---

## Topic Index

<ul style="line-height:1.8;">
  <li><a href="#topic-1"><span style="color:#2563eb;font-weight:700;">1.</span> <span style="color:#111827;">Cloud Fundamentals and Azure Overview</span></a></li>
  <li><a href="#topic-2"><span style="color:#2563eb;font-weight:700;">2.</span> <span style="color:#111827;">Azure Resource Manager and Subscriptions</span></a></li>
  <li><a href="#topic-3"><span style="color:#2563eb;font-weight:700;">3.</span> <span style="color:#111827;">Azure Compute Services</span></a></li>
  <li><a href="#topic-4"><span style="color:#16a34a;font-weight:700;">4.</span> <span style="color:#111827;">Azure Storage Services</span></a></li>
  <li><a href="#topic-5"><span style="color:#16a34a;font-weight:700;">5.</span> <span style="color:#111827;">Azure Databases</span></a></li>
  <li><a href="#topic-6"><span style="color:#16a34a;font-weight:700;">6.</span> <span style="color:#111827;">Azure Networking</span></a></li>
  <li><a href="#topic-7"><span style="color:#7c3aed;font-weight:700;">7.</span> <span style="color:#111827;">Azure Identity and Access Management</span></a></li>
  <li><a href="#topic-8"><span style="color:#7c3aed;font-weight:700;">8.</span> <span style="color:#111827;">Azure Key Vault and Secrets Management</span></a></li>
  <li><a href="#topic-9"><span style="color:#7c3aed;font-weight:700;">9.</span> <span style="color:#111827;">Azure Monitoring and Application Insights</span></a></li>
  <li><a href="#topic-10"><span style="color:#dc2626;font-weight:700;">10.</span> <span style="color:#111827;">Azure Functions and Serverless</span></a></li>
  <li><a href="#topic-11"><span style="color:#dc2626;font-weight:700;">11.</span> <span style="color:#111827;">Messaging: Service Bus and Event Grid</span></a></li>
  <li><a href="#topic-12"><span style="color:#dc2626;font-weight:700;">12.</span> <span style="color:#111827;">Azure API Management</span></a></li>
  <li><a href="#topic-13"><span style="color:#ea580c;font-weight:700;">13.</span> <span style="color:#111827;">Containers, ACR, and AKS</span></a></li>
  <li><a href="#topic-14"><span style="color:#ea580c;font-weight:700;">14.</span> <span style="color:#111827;">Azure DevOps and CI/CD</span></a></li>
  <li><a href="#topic-15"><span style="color:#ea580c;font-weight:700;">15.</span> <span style="color:#111827;">Security, Compliance, and Governance</span></a></li>
  <li><a href="#topic-16"><span style="color:#0891b2;font-weight:700;">16.</span> <span style="color:#111827;">High Availability, DR, and Backup</span></a></li>
  <li><a href="#topic-17"><span style="color:#0891b2;font-weight:700;">17.</span> <span style="color:#111827;">Cost Management and Well-Architected Framework</span></a></li>
  <li><a href="#suggested-learning-order"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Suggested Learning Order</span></a></li>
  <li><a href="#weekly-study-plan"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Weekly Study Plan</span></a></li>
  <li><a href="#practical-project-preparation"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Practical Project Preparation</span></a></li>
  <li><a href="#final-preparation-checklist"><span style="color:#9333ea;font-weight:700;">Guide:</span> <span style="color:#111827;">Final Preparation Checklist</span></a></li>
</ul>

---

<a id="topic-1"></a>

## 1. Cloud Fundamentals and Azure Overview

### What to Learn

- IaaS, PaaS, SaaS
- Public, private, hybrid cloud
- Azure regions and availability zones
- Azure global infrastructure
- Shared responsibility model
- CapEx vs OpEx
- Azure portal, CLI, PowerShell, and Cloud Shell

### Cloud Service Models

| Model | You Manage | Provider Manages | Example |
| --- | --- | --- | --- |
| IaaS | OS, runtime, apps, data | Virtualization, servers, storage, networking | Azure Virtual Machines |
| PaaS | Apps and data | Runtime, OS, infrastructure | Azure App Service, Azure SQL |
| SaaS | Configuration and data usage | Everything else | Microsoft 365, Salesforce |

### Regions and Availability Zones

| Concept | Meaning |
| --- | --- |
| Region | Geographic area with one or more datacenters |
| Availability Zone | Physically separate datacenters within a region |
| Region Pair | Paired regions for disaster recovery (e.g. East US ↔ West US) |
| SLA | Service-level agreement — uptime guarantee per service |

| Question | Answer |
| --- | --- |
| What is Azure? | Microsoft's public cloud platform for compute, storage, networking, AI, and DevOps |
| IaaS vs PaaS? | IaaS = you manage VMs/OS; PaaS = you deploy code, Azure manages runtime and infra |
| Shared responsibility? | Provider secures cloud; customer secures data, access, and app configuration |
| Region vs availability zone? | Region = geography; AZ = isolated datacenters within a region for fault tolerance |
| Why region pairs? | Microsoft coordinates DR — at least one region in pair not updated simultaneously |

**Must-know points:**
- Choose region close to users for latency; check compliance/data residency requirements
- Deploy across multiple AZs for high availability within a region
- Azure offers 200+ services — interviews focus on core compute, storage, networking, identity, and monitoring

---

<a id="topic-2"></a>

## 2. Azure Resource Manager and Subscriptions

### What to Learn

- Azure Resource Manager (ARM)
- Resource groups
- Subscriptions
- Management groups
- ARM templates and Bicep
- Tags and naming conventions
- RBAC at resource scope
- Azure Policy

### Hierarchy

```text
Management Group
└── Subscription
    └── Resource Group
        └── Resources (VM, App Service, Storage Account, etc.)
```

| Concept | Purpose |
| --- | --- |
| Subscription | Billing and access boundary |
| Resource Group | Logical container for related resources — lifecycle tied together |
| ARM | Deployment and management API for all Azure resources |
| Tags | Key-value metadata for cost tracking and organization |
| Azure Policy | Enforce organizational standards (e.g. allowed regions, VM SKUs) |

| Question | Answer |
| --- | --- |
| What is a resource group? | Container for resources that share lifecycle, permissions, and billing tags |
| ARM vs classic? | ARM is current model — resource groups, RBAC, templates; classic is legacy |
| Bicep vs ARM JSON? | Bicep is domain-specific language that compiles to ARM JSON — cleaner syntax |
| Can a resource belong to multiple RGs? | No — each resource belongs to exactly one resource group |
| Delete resource group? | Deletes all resources inside it |

**Must-know points:**
- Group resources by application/environment (e.g. `rg-ecommerce-prod`)
- Use Infrastructure as Code (Bicep/Terraform) for repeatable deployments
- Apply RBAC at subscription, resource group, or individual resource level

---

<a id="topic-3"></a>

## 3. Azure Compute Services

### What to Learn

- Azure Virtual Machines
- VM Scale Sets
- Azure App Service
- Azure Container Instances (ACI)
- Azure Kubernetes Service (AKS) overview
- Azure Batch
- Choosing the right compute option

### Compute Comparison

| Service | Best For | Management Level |
| --- | --- | --- |
| Virtual Machines | Full OS control, lift-and-shift | IaaS |
| VM Scale Sets | Auto-scaling identical VMs | IaaS |
| App Service | Web apps, APIs, containers (PaaS) | PaaS |
| Azure Functions | Event-driven, short-lived code | Serverless |
| ACI | Quick container runs without orchestration | Containers |
| AKS | Production container orchestration | Containers/Kubernetes |

### App Service Plans

| Tier | Use Case |
| --- | --- |
| Free/Shared | Dev/test only |
| Basic | Low-traffic production |
| Standard | Production with auto-scale, staging slots |
| Premium | High performance, more instances, VNet integration |

| Question | Answer |
| --- | --- |
| App Service vs VM? | App Service = managed PaaS, no OS patching; VM = full control, you manage OS |
| Deployment slots? | Staging environments in App Service — swap with zero downtime |
| VM Scale Set? | Group of identical VMs with auto-scale and load balancing |
| When AKS over App Service? | Complex microservices, custom orchestration, multi-container apps |
| Always On in App Service? | Prevents idle timeout — required for WebJobs and some background tasks |

**Must-know points:**
- App Service supports .NET, Node, Python, Java, PHP, and Docker containers
- Use deployment slots for blue-green deployments
- VM disks: OS disk, temporary disk (ephemeral), data disks — understand redundancy options

---

<a id="topic-4"></a>

## 4. Azure Storage Services

### What to Learn

- Storage accounts
- Blob storage (block, page, append)
- Access tiers (Hot, Cool, Archive)
- Azure Files
- Queue storage
- Table storage
- Redundancy options (LRS, ZRS, GRS, GZRS)
- Shared Access Signatures (SAS)
- Managed disks

### Blob Access Tiers

| Tier | Use Case | Cost |
| --- | --- | --- |
| Hot | Frequent access | Higher storage, lower access cost |
| Cool | Infrequent access (30+ days) | Lower storage, higher access cost |
| Archive | Rare access (180+ days) | Lowest storage, rehydration delay |

### Redundancy Options

| Option | Copies | Scope |
| --- | --- | --- |
| LRS | 3 | Single datacenter |
| ZRS | 3 | Across availability zones |
| GRS | 6 | Primary + secondary region |
| GZRS | 6 | ZRS in primary + secondary region |

| Question | Answer |
| --- | --- |
| Blob vs File storage? | Blob = object storage for unstructured data; Files = SMB/NFS file shares |
| What is SAS? | Time-limited delegated access token for storage without sharing account keys |
| Queue storage use? | Async message queue between application components |
| LRS vs GRS? | LRS = single region; GRS = geo-replicated to paired region for DR |
| Storage account limits? | Know basics: max capacity, throughput tiers, blob vs general-purpose v2 |

**Must-know points:**
- Never expose storage account keys in code — use Managed Identity + RBAC or SAS
- Use `$web` container for static website hosting
- Lifecycle management policies auto-tier or delete blobs based on rules

---

<a id="topic-5"></a>

## 5. Azure Databases

### What to Learn

- Azure SQL Database
- SQL Managed Instance
- Cosmos DB
- Azure Database for PostgreSQL/MySQL
- Redis Cache
- Connection security and firewall rules
- Elastic pools
- Read replicas and geo-replication

### Database Comparison

| Service | Type | Best For |
| --- | --- | --- |
| Azure SQL Database | Relational (PaaS) | SQL Server workloads without managing infra |
| SQL Managed Instance | Relational (PaaS) | Near 100% SQL Server compatibility, VNet |
| Cosmos DB | NoSQL (multi-model) | Global distribution, low latency, flexible schema |
| Azure Cache for Redis | In-memory cache | Session state, caching, pub/sub |

### Cosmos DB APIs

| API | Model |
| --- | --- |
| SQL (Core) | Document (JSON) |
| MongoDB | Document |
| Cassandra | Wide-column |
| Gremlin | Graph |
| Table | Key-value |

| Question | Answer |
| --- | --- |
| SQL Database vs Managed Instance? | SQL DB = single database PaaS; MI = instance-level features, agent, linked servers |
| Cosmos DB consistency levels? | Strong → Bounded Staleness → Session → Consistent Prefix → Eventual |
| DTU vs vCore? | DTU = bundled compute/storage; vCore = separate compute and storage scaling |
| Elastic pool? | Share resources across multiple SQL databases — cost optimization for variable workloads |
| Redis use in Azure apps? | Distributed cache, session store, rate limiting, pub/sub messaging |

**Must-know points:**
- Enable Azure AD authentication for SQL instead of SQL logins where possible
- Cosmos DB offers single-digit ms latency with global distribution and 99.999% SLA (multi-region writes)
- Use connection pooling and retry policies in application code

---

<a id="topic-6"></a>

## 6. Azure Networking

### What to Learn

- Virtual Networks (VNet)
- Subnets and NSGs
- Azure Load Balancer
- Application Gateway
- Azure Front Door
- VPN Gateway and ExpressRoute
- Private Endpoints
- DNS zones
- VNet peering

### Load Balancing Options

| Service | Layer | Use Case |
| --- | --- | --- |
| Load Balancer | L4 (TCP/UDP) | Internal or public traffic distribution to VMs |
| Application Gateway | L7 (HTTP/HTTPS) | SSL termination, URL routing, WAF |
| Front Door | Global L7 | Global load balancing, CDN, WAF at edge |
| Traffic Manager | DNS-based | Route to endpoints across regions |

### NSG Rules

| Property | Meaning |
| --- | --- |
| Priority | Lower number = higher priority (100–4096) |
| Source/Destination | IP, service tag, or application security group |
| Port | Single port, range, or `*` |
| Action | Allow or Deny |

| Question | Answer |
| --- | --- |
| VNet purpose? | Isolated network in Azure — define IP ranges, subnets, routing |
| NSG vs Azure Firewall? | NSG = stateful L3/L4 rules on subnet/NIC; Firewall = centralized L3-L7 with threat intel |
| Private Endpoint? | Private IP in VNet to access PaaS (Storage, SQL) without public internet |
| VNet peering? | Connect two VNets — low latency, uses Microsoft backbone |
| App Gateway WAF? | Web Application Firewall — protects against OWASP Top 10 |

**Must-know points:**
- Default outbound internet access from VNet is changing — plan explicit egress (NAT Gateway, Firewall)
- Use service endpoints or private endpoints for secure PaaS connectivity
- Application Gateway supports cookie-based session affinity

---

<a id="topic-7"></a>

## 7. Azure Identity and Access Management

### What to Learn

- Microsoft Entra ID (Azure AD)
- Users, groups, and service principals
- Managed Identities
- RBAC roles
- Conditional Access
- Multi-factor authentication (MFA)
- App registrations and OAuth/OIDC
- Privileged Identity Management (PIM)

### What is Managed Identity?

A **Managed Identity** is an Azure feature that gives your application an automatically managed identity in **Microsoft Entra ID** (formerly Azure AD).

This lets your application securely access Azure resources **without storing secrets, passwords, or connection strings**.

> **Important:** Managed Identity is **not** related to ASP.NET Core Identity (Identity Manager). They solve different problems.

| Managed Identity | ASP.NET Core Identity |
| --- | --- |
| Used to authenticate an **application** or Azure resource | Used to authenticate **users** |
| Provided by **Azure** | Implemented in **your application** |
| No username/password or secrets | Uses username/password, external login, etc. |
| Used to access Azure services (Key Vault, Storage, SQL, Service Bus) | Used for user login and authorization |

#### Example — without Managed Identity

```text
.NET API
   ↓
Connection String / Client Secret
   ↓
Azure Key Vault
```

You must store and rotate secrets yourself.

#### Example — with Managed Identity

```text
.NET API (Managed Identity)
        │
        ▼
Microsoft Entra ID
        │
        ▼
Azure Key Vault
```

Azure automatically authenticates your application — no secrets in code or config.

### Managed Identity Types

| Type | Scope | Use Case |
| --- | --- | --- |
| System-assigned | Tied to resource lifecycle | Single resource accessing Azure services |
| User-assigned | Independent lifecycle, shareable | Multiple resources need same identity |

### Common RBAC Roles

| Role | Permission Level |
| --- | --- |
| Owner | Full access + RBAC management |
| Contributor | Full access, cannot manage RBAC |
| Reader | Read-only |
| User Access Administrator | Manage user access to resources |

| Question | Answer |
| --- | --- |
| Entra ID vs on-prem AD? | Entra ID = cloud identity; can sync with AD via Entra Connect for hybrid |
| Service principal? | Identity for apps/services — used by automation and app-to-Azure auth |
| What is Managed Identity? | Azure-managed Entra ID identity for apps — access Key Vault/Storage/SQL without secrets |
| Managed Identity vs ASP.NET Core Identity? | Managed Identity = app → Azure resources; ASP.NET Identity = user login in your app |
| Managed Identity benefit? | No credentials in code — Azure manages rotation automatically |
| Conditional Access? | Policy engine — require MFA, compliant device, trusted location |
| RBAC vs Azure AD roles? | Azure AD roles = directory level; RBAC = Azure resource access |

**Must-know points:**
- Principle of least privilege — assign minimum required role at narrowest scope
- Use Managed Identities for App Service, Functions, VMs accessing Key Vault or Storage
- Enable MFA for all privileged accounts

---

<a id="topic-8"></a>

## 8. Azure Key Vault and Secrets Management

### What to Learn

- Secrets, keys, and certificates in Key Vault
- Access policies vs RBAC
- Soft delete and purge protection
- Key Vault references in App Service
- Encryption at rest with customer-managed keys
- Certificate auto-renewal

| Object Type | Stores |
| --- | --- |
| Secrets | Connection strings, API keys, passwords |
| Keys | Encryption keys (RSA, EC) |
| Certificates | TLS certs with auto-renewal support |

| Question | Answer |
| --- | --- |
| Why Key Vault? | Centralized secrets management, audit logging, HSM-backed keys |
| Access policy vs RBAC? | Legacy = access policies; recommended = Key Vault RBAC with Azure roles |
| Soft delete? | Deleted vaults/secrets recoverable for retention period (default 90 days) |
| Reference in App Service? | `@Microsoft.KeyVault(SecretUri=...)` — no secret in app settings |
| HSM? | Hardware Security Module — FIPS 140-2 Level 2 validated key storage |

**Must-know points:**
- Never commit secrets to source control — use Key Vault + Managed Identity
- Enable purge protection on production vaults
- Log Key Vault access to Log Analytics for audit compliance

---

<a id="topic-9"></a>

## 9. Azure Monitoring and Application Insights

### What to Learn

- Azure Monitor overview
- Log Analytics workspaces
- Metrics vs Logs
- Application Insights
- Alerts and Action Groups
- Dashboards and Workbooks
- Distributed tracing
- KQL (Kusto Query Language) basics

### Azure Monitor Components

| Component | Purpose |
| --- | --- |
| Metrics | Numerical time-series (CPU, requests, latency) |
| Logs | Structured and unstructured log data in Log Analytics |
| Application Insights | APM — requests, dependencies, exceptions, live metrics |
| Alerts | Notify on threshold or log query match |
| Action Groups | Define who gets notified (email, SMS, webhook, Logic App) |

### Useful KQL Examples

```kql
// Failed requests in last hour
requests
| where timestamp > ago(1h) and success == false
| summarize count() by resultCode, name

// Exceptions
exceptions
| where timestamp > ago(24h)
| summarize count() by type, outerMessage
```

| Question | Answer |
| --- | --- |
| Metrics vs Logs? | Metrics = lightweight numeric time-series; Logs = rich queryable event data |
| Application Insights SDK? | Auto-collects requests, dependencies, exceptions from .NET, Node, Java, Python |
| Distributed tracing? | Correlates requests across services using operation_Id / trace context |
| Alert types? | Metric alerts, log query alerts, activity log alerts |
| What is KQL? | Kusto Query Language — query language for Log Analytics and Application Insights |

**Must-know points:**
- Instrument apps with Application Insights from day one — dependency tracking is invaluable
- Set up alerts for error rate, response time, and availability
- Use Workbooks for operational dashboards combining metrics and logs

---

<a id="topic-10"></a>

## 10. Azure Functions and Serverless

### What to Learn

- Serverless concepts
- Function triggers and bindings
- Consumption vs Premium vs Dedicated plans
- Durable Functions
- Cold start
- Integration with Event Grid, Service Bus, Storage

### Common Triggers

| Trigger | Fires When |
| --- | --- |
| HTTP | HTTP request received |
| Timer | CRON schedule |
| Blob | New or updated blob |
| Queue | Message in storage queue or Service Bus |
| Event Grid | Event published to topic |

| Question | Answer |
| --- | --- |
| Consumption plan? | Pay per execution, auto-scale, cold starts possible |
| Premium plan? | Pre-warmed instances, VNet integration, longer timeouts |
| Bindings? | Declarative connection to input/output data — reduce boilerplate code |
| Durable Functions? | Orchestrate workflows with state — fan-out/fan-in, human interaction |
| Cold start? | First invocation delay while runtime spins up — mitigated by Premium plan |

**Must-know points:**
- Functions are ideal for event-driven tasks: image resize, webhooks, scheduled jobs
- Use Durable Functions for multi-step workflows instead of chaining HTTP calls
- Store secrets in Key Vault, not in `local.settings.json` committed to git

---

<a id="topic-11"></a>

## 11. Messaging: Service Bus and Event Grid

### What to Learn

- Azure Service Bus (queues and topics)
- Event Grid
- Event Hubs overview
- At-least-once vs exactly-once delivery
- Dead-letter queues
- Message sessions and ordering

### Service Bus vs Event Grid vs Event Hubs

| Service | Pattern | Use Case |
| --- | --- | --- |
| Service Bus | Enterprise messaging | Order processing, task queues, pub/sub with subscriptions |
| Event Grid | Event routing | React to Azure resource changes, custom events, serverless |
| Event Hubs | Event streaming | High-throughput ingestion (telemetry, IoT, log streaming) |

| Question | Answer |
| --- | --- |
| Queue vs Topic? | Queue = one consumer; Topic = pub/sub with multiple subscriptions |
| Dead-letter queue? | Holds messages that failed processing after max delivery attempts |
| Event Grid vs Service Bus? | Event Grid = lightweight event notification/routing; Service Bus = enterprise messaging with sessions, transactions |
| Peek-lock mode? | Message locked during processing — delete on success, abandon on failure |
| Sessions? | Ordered, related messages processed by same consumer |

**Must-know points:**
- Use Service Bus for reliable work queues between microservices
- Event Grid integrates natively with Azure services (Blob created, Resource updated)
- Always implement idempotent message handlers

---

<a id="topic-12"></a>

## 12. Azure API Management

### What to Learn

- API Gateway concepts on Azure
- APIM policies
- Rate limiting and throttling
- OAuth and API keys
- Developer portal
- Versioning and revisions
- Backend integration (App Service, Functions, AKS)

### Common APIM Policies

| Policy | Purpose |
| --- | --- |
| rate-limit | Limit calls per period |
| jwt-validate | Validate JWT tokens |
| cors | Configure cross-origin access |
| set-header | Add/modify request/response headers |
| cache-lookup | Response caching |

| Question | Answer |
| --- | --- |
| Why APIM? | Single entry point — security, throttling, versioning, analytics for APIs |
| Policy pipeline? | Inbound → Backend → Outbound → On-error |
| Revision vs Version? | Revision = non-breaking changes; Version = breaking changes with separate URL |
| Self-hosted gateway? | Run APIM gateway on-premises or other clouds — hybrid scenarios |
| Products and subscriptions? | Group APIs into products; developers subscribe with API keys |

**Must-know points:**
- APIM sits in front of microservices as a unified API facade
- Use policies for cross-cutting concerns instead of duplicating in each service
- Monitor API usage through built-in analytics

---

<a id="topic-13"></a>

## 13. Containers, ACR, and AKS

### What to Learn

- Azure Container Registry (ACR)
- Azure Container Instances
- Azure Kubernetes Service (AKS)
- Node pools and scaling
- Ingress controllers
- Helm charts
- Container networking in Azure

| Service | Purpose |
| --- | --- |
| ACR | Private Docker/OCI image registry |
| ACI | Run containers without managing servers |
| AKS | Managed Kubernetes — control plane managed by Azure |

### AKS Key Concepts

| Concept | Meaning |
| --- | --- |
| Cluster | Control plane + node pools |
| Node pool | Group of VMs running container workloads |
| Pod | Smallest deployable unit — one or more containers |
| Service | Stable network endpoint for pods |
| Ingress | HTTP/S routing to services |

| Question | Answer |
| --- | --- |
| ACR tiers? | Basic, Standard, Premium — Premium adds geo-replication and private link |
| AKS vs App Service containers? | AKS = full Kubernetes orchestration; App Service = simpler PaaS container hosting |
| System vs user node pool? | System pool runs K8s system pods; user pool runs application workloads |
| Azure CNI vs kubenet? | Azure CNI = pods get VNet IPs; kubenet = overlay network |
| Horizontal Pod Autoscaler? | Scales pod count based on CPU/memory/custom metrics |

**Must-know points:**
- Build and push images to ACR in CI/CD pipeline
- Use Managed Identity for AKS to pull from ACR without credentials
- Enable Azure Monitor container insights for AKS observability

---

<a id="topic-14"></a>

## 14. Azure DevOps and CI/CD

### What to Learn

- Azure DevOps services (Boards, Repos, Pipelines, Artifacts, Test Plans)
- YAML pipelines
- Build and release stages
- Deployment to App Service, AKS, Functions
- GitHub Actions with Azure
- Environment approvals and gates
- Variable groups and Key Vault integration

### Pipeline Stages

```text
Trigger (push/PR)
  → Build (compile, test)
    → Package (artifact/image)
      → Deploy (dev → staging → prod)
```

| Question | Answer |
| --- | --- |
| Azure Pipelines vs GitHub Actions? | Both work with Azure; Pipelines is Azure DevOps native; Actions is GitHub native |
| YAML vs Classic pipeline? | YAML = code in repo, versioned; Classic = GUI-defined (legacy) |
| Deployment slots in pipeline? | Deploy to staging slot → run tests → swap to production |
| Variable groups? | Share variables across pipelines — link to Key Vault for secrets |
| Service connection? | Authenticated link between pipeline and Azure subscription |

**Must-know points:**
- Store pipeline YAML in source control alongside application code
- Use multi-stage pipelines with environment approvals for production
- Run unit tests and security scans in CI before deployment

---

<a id="topic-15"></a>

## 15. Security, Compliance, and Governance

### What to Learn

- Defense in depth
- Microsoft Defender for Cloud
- Azure Policy and Blueprints
- Network security best practices
- Encryption in transit and at rest
- Zero Trust model
- Compliance offerings (ISO, SOC, GDPR)

### Security Layers

```text
Identity (Entra ID, MFA)
  → Perimeter (Firewall, Front Door, WAF)
    → Network (NSG, Private Endpoints)
      → Compute (patching, endpoint protection)
        → Application (secure coding, auth)
          → Data (encryption, classification)
```

| Question | Answer |
| --- | --- |
| Defender for Cloud? | Unified security posture management — recommendations, threat protection |
| Azure Policy example? | "Only allow deployments in East US" or "Require tags on resources" |
| Zero Trust? | Never trust, always verify — identity-centric security, least privilege |
| Encryption at rest? | Most Azure services encrypt by default; use CMK for customer control |
| WAF? | Web Application Firewall — blocks SQL injection, XSS at Application Gateway or Front Door |

**Must-know points:**
- Enable Microsoft Defender for Cloud on all subscriptions
- Use Private Endpoints to keep traffic off public internet
- Regularly review RBAC assignments and remove unused permissions

---

<a id="topic-16"></a>

## 16. High Availability, DR, and Backup

### What to Learn

- Availability Sets vs Availability Zones
- SLA calculations
- Azure Site Recovery
- Azure Backup
- Geo-redundancy strategies
- RTO and RPO
- Chaos engineering basics

| Concept | Meaning |
| --- | --- |
| RTO | Recovery Time Objective — max acceptable downtime |
| RPO | Recovery Point Objective — max acceptable data loss |
| Availability Set | Fault/update domains within single datacenter |
| Availability Zone | Datacenter-level isolation within region |

| Question | Answer |
| --- | --- |
| Availability Set vs Zone? | Set = protect from hardware failure in one DC; Zone = protect from full DC failure |
| Site Recovery? | Replicate VMs/on-prem to Azure for DR — orchestrated failover |
| Azure Backup? | Backup VMs, SQL, files, blobs with retention policies |
| Composite SLA? | Multiply individual SLAs — two 99.9% services = 99.8% combined |
| GRS for storage DR? | Read-access GRS allows read from secondary region during outage |

**Must-know points:**
- Design for failure — assume components will fail
- Test DR failover regularly, not just document it
- Use multi-region deployment for mission-critical applications

---

<a id="topic-17"></a>

## 17. Cost Management and Well-Architected Framework

### What to Learn

- Azure pricing models (pay-as-you-go, reserved, spot)
- Cost Management + Billing
- Tags for cost allocation
- Azure Advisor recommendations
- Five pillars of Well-Architected Framework
- Right-sizing resources

### Well-Architected Pillars

| Pillar | Focus |
| --- | --- |
| Reliability | Resiliency, recovery, scaling |
| Security | Protect data and assets |
| Cost Optimization | Maximize value, minimize spend |
| Operational Excellence | Monitoring, automation, DevOps |
| Performance Efficiency | Scale, speed, efficient resources |

### Cost Saving Strategies

| Strategy | Savings |
| --- | --- |
| Reserved Instances | Up to 72% vs pay-as-you-go for 1–3 year commitment |
| Spot VMs | Up to 90% — interruptible workloads only |
| Auto-shutdown dev VMs | Avoid paying for unused compute |
| Right-size | Downsize over-provisioned resources per Advisor |

| Question | Answer |
| --- | --- |
| Reserved vs Spot? | Reserved = committed capacity; Spot = unused capacity, can be evicted |
| Azure Advisor? | Free recommendations for cost, security, reliability, performance |
| Cost Management? | Dashboards, budgets, alerts when spending exceeds threshold |
| Tag strategy? | Environment, Project, Owner — enables chargeback and filtering |
| Well-Architected Review? | Assessment against five pillars with actionable recommendations |

**Must-know points:**
- Set budget alerts early — avoid surprise bills
- Delete unused resources (orphaned disks, IPs, test RGs)
- Use Autoscale instead of over-provisioning for variable workloads

---

<a id="suggested-learning-order"></a>

## Suggested Learning Order

1. Cloud fundamentals and Azure overview
2. ARM, subscriptions, and resource groups
3. Compute services (VMs, App Service)
4. Storage services
5. Databases (SQL, Cosmos DB, Redis)
6. Networking (VNet, NSG, Load Balancer)
7. Identity and RBAC
8. Key Vault
9. Monitoring and Application Insights
10. Functions and serverless
11. Messaging (Service Bus, Event Grid)
12. API Management
13. Containers and AKS
14. DevOps and CI/CD
15. Security and governance
16. HA, DR, and backup
17. Cost management and Well-Architected Framework

---

<a id="weekly-study-plan"></a>

## Weekly Study Plan

### Week 1: Cloud Foundation

- IaaS, PaaS, SaaS
- Regions and availability zones
- ARM, resource groups, subscriptions
- Azure portal, CLI basics
- RBAC fundamentals

### Week 2: Core Services

- Virtual Machines and App Service
- Storage accounts and blob tiers
- Azure SQL Database
- VNet, subnets, NSGs

### Week 3: Identity and Security

- Entra ID and Managed Identities
- Key Vault
- Conditional Access and MFA
- Private Endpoints
- Defender for Cloud

### Week 4: Integration and DevOps

- Azure Functions
- Service Bus and Event Grid
- Application Insights and KQL
- Azure DevOps pipelines
- APIM basics

### Week 5: Advanced and Architecture

- AKS and ACR
- High availability and DR
- Cost optimization
- Well-Architected Framework
- Hands-on project review

---

<a id="practical-project-preparation"></a>

## Practical Project Preparation

### What to Build

- Deploy a .NET Web API to Azure App Service with CI/CD
- Store secrets in Key Vault with Managed Identity
- Add Application Insights monitoring
- Provision SQL Database with firewall rules
- Create a blob storage account with SAS access
- Build an Azure Function triggered by queue message
- Set up a VNet with private endpoint to storage
- Deploy a containerized app to AKS

---

<a id="final-preparation-checklist"></a>

## Final Preparation Checklist

- Can explain IaaS, PaaS, and SaaS with Azure examples.
- Can explain regions, availability zones, and SLA concepts.
- Can describe ARM hierarchy (management group → subscription → RG → resource).
- Can compare VM, App Service, Functions, and AKS.
- Can explain blob tiers and storage redundancy options.
- Can explain Azure SQL vs Cosmos DB use cases.
- Can describe VNet, NSG, Load Balancer, and Private Endpoints.
- Can explain Managed Identities and RBAC.
- Can describe Key Vault usage and best practices.
- Can explain Application Insights and basic KQL queries.
- Can compare Service Bus, Event Grid, and Event Hubs.
- Can explain CI/CD deployment to Azure.
- Can describe HA/DR concepts (RTO, RPO, availability zones).
- Can explain Well-Architected Framework pillars.
- Can discuss cost optimization strategies.

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### How Do You Deploy an Application in Azure?

| Method | Steps |
| --- | --- |
| App Service | Build app → publish from VS/`az webapp up` → configure app settings |
| Containers | Build image → push to ACR → deploy to App Service or AKS |
| CI/CD | Azure DevOps / GitHub Actions pipeline → build → deploy on push |
| IaC | Bicep/Terraform to provision resources repeatably |

> **One-liner:** Build → publish artifact or container → deploy via portal, CLI, or CI/CD pipeline.

### What is a Resource Group?

| Aspect | Detail |
| --- | --- |
| Definition | Logical container for related Azure resources |
| Lifecycle | Deleting RG deletes all resources inside |
| Scope | RBAC, tags, and billing can apply at RG level |
| Example | `rg-ecommerce-prod` holds App Service, SQL, Storage |

> **One-liner:** Resource Group groups related resources — deploy, manage, and delete them together.

### What is Managed Identity?

A Managed Identity gives your .NET app (or other Azure resource) an Entra ID identity so it can call Azure services **without storing secrets**.

| Managed Identity | ASP.NET Core Identity |
| --- | --- |
| Authenticates the **app** to Azure | Authenticates **users** in your app |
| Azure-managed (no passwords in code) | Username/password, OAuth logins, etc. |
| Access Key Vault, Storage, SQL, Service Bus | Login, roles, claims in your application |

```text
Without MI:  App → Client Secret → Key Vault   (you manage secrets)
With MI:     App → Entra ID → Key Vault        (Azure authenticates the app)
```

| Type | Detail |
| --- | --- |
| System-assigned | Tied to one resource lifecycle |
| User-assigned | Independent; can be shared across resources |

> **One-liner:** Managed Identity is app identity for Azure resources — not user login (that’s ASP.NET Core Identity).

### What are Availability Zones?

| Aspect | Detail |
| --- | --- |
| Definition | Physically separate datacenters within an Azure region |
| Purpose | Protect against datacenter-level failure |
| SLA | Higher when services span multiple zones |
| Use | Deploy VMs, App Service, SQL across zones for HA |

> **One-liner:** Availability Zones are isolated DCs in one region — spread workloads for fault tolerance.

### Azure App Services

| Aspect | Detail |
| --- | --- |
| Type | PaaS for web apps, APIs, and containers |
| Features | Auto-scale, deployment slots, custom domains, SSL |
| Runtimes | .NET, Node, Python, Java, PHP |
| Tiers | Free → Basic → Standard → Premium |

> **One-liner:** App Service is managed PaaS hosting — deploy code, Azure handles infra and scaling.

### Azure Key Vault

| Aspect | Detail |
| --- | --- |
| Stores | Secrets, keys, certificates |
| Access | RBAC + Managed Identity (no keys in code) |
| Integration | App Service references, `IConfiguration` provider |
| Security | Soft delete, purge protection, audit logging |

> **One-liner:** Key Vault centralizes secrets — apps access via Managed Identity, never hardcoded.

### Azure Blob Storage

| Aspect | Detail |
| --- | --- |
| Type | Object storage for unstructured data |
| Tiers | Hot, Cool, Archive — cost vs access frequency |
| Use cases | Images, backups, logs, static websites |
| Access | SAS tokens, RBAC, Private Endpoints |

> **One-liner:** Blob Storage holds files at scale — pick tier by how often you read the data.

### CI/CD Pipeline Implementation

| Stage | Action |
| --- | --- |
| Source | Git push triggers pipeline |
| Build | `dotnet build`, `npm build`, run tests |
| Package | Publish artifact or Docker image to ACR |
| Deploy | Release to App Service / AKS with approvals |

> **One-liner:** Automate build-test-deploy on every merge — manual releases cause drift and errors.
