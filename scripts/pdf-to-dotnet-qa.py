import re
from pathlib import Path
from pypdf import PdfReader

pdf_path = Path(__file__).resolve().parent.parent / "1780371113602.pdf"
out_path = Path(__file__).resolve().parent.parent / "MarkDownFormat" / "dotnet-senior-interview-qa.md"

reader = PdfReader(str(pdf_path))
pages_text = []
for page in reader.pages:
    t = page.extract_text() or ""
    t = t.replace("\u2014", "—").replace("\u2013", "–").replace("\ufffd", "–")
    lines = t.splitlines()
    cleaned = []
    for line in lines:
        s = line.strip()
        if not s or s == ".NET Senior Interview Q&A" or re.match(r"^Page \d+$", s):
            continue
        cleaned.append(s)
    pages_text.append("\n".join(cleaned))

full = "\n".join(pages_text)
full = re.sub(r"\n{3,}", "\n\n", full)

buckets = [
    (1, "C# and .NET", 1, 75, "#2563eb", "Types, generics, async, memory, GC, performance"),
    (2, "ASP.NET Core and EF Core", 76, 145, "#16a34a", "Controllers, Minimal APIs, filters, validation, EF Core"),
    (3, "Caching, Scheduling, Messaging and Security", 146, 185, "#7c3aed", "Auth, JWT, caching, Quartz, MediatR, MassTransit"),
    (4, "System Design and Architecture", 186, 215, "#dc2626", "HttpClient, Polly, OpenTelemetry, Docker, Aspire"),
]

q_pattern = re.compile(r"(?:^|\n)\s*Q(\d+)\s*\n", re.MULTILINE)
matches = list(q_pattern.finditer(full))
questions = {}

for i, m in enumerate(matches):
    num = int(m.group(1))
    start = m.end()
    end = matches[i + 1].start() if i + 1 < len(matches) else len(full)
    block = full[start:end].strip()
    lines = block.split("\n")
    title_lines = []
    body_lines = []
    phase = "title"
    for line in lines:
        if phase == "title":
            if line.strip() == "Answer" or line.strip().startswith("Answer"):
                phase = "body"
                continue
            if re.match(r"^Ch \d+", line) or re.match(r"^BUCKET \d+", line):
                continue
            title_lines.append(line)
        else:
            body_lines.append(line)
    title = " ".join(title_lines).strip()
    body = "\n".join(body_lines).strip()
    answer_match = re.search(r"\nExample\s*\n", body, re.IGNORECASE)
    if answer_match:
        answer = body[: answer_match.start()].strip()
        example = body[answer_match.end() :].strip()
    else:
        answer, example = body.strip(), ""
    questions[num] = {"title": title, "answer": answer, "example": example}

chapter_map = {}
for m in re.finditer(r"Ch (\d+) [–-] ([^\n]+)", full):
    nxt = q_pattern.search(full, m.end())
    if nxt:
        chapter_map[int(nxt.group(1))] = (int(m.group(1)), m.group(2).strip())


def first_sentence(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    match = re.match(r"^(.+?[.!?])(\s|$)", text)
    if match:
        return match.group(1)
    return text[:140] + ("…" if len(text) > 140 else "")


def is_diff_question(title: str) -> bool:
    lower = title.lower()
    return "difference between" in lower or " vs " in lower or " vs. " in lower


def format_example(example: str) -> str:
    if not example:
        return ""
    markers = (
        "{", "}", ";", "=>", "var ", "public ", "class ", "void ", "await ",
        "builder.", "GET ", "POST ", "PUT ", "DELETE ", "PATCH ", "using ",
        "record ", "interface ", "//", "try", "return ", "new ", "Console.",
    )
    lines = example.split("\n")
    code_lines = sum(1 for line in lines if line.strip() and any(marker in line for marker in markers))
    if code_lines >= max(2, len(lines) // 3):
        return "```csharp\n" + example + "\n```"
    return example


def try_diff_table(answer: str) -> str | None:
    parts = re.split(r"\.\s+", answer)
    rows = []
    for part in parts[:8]:
        part = part.strip()
        if not part:
            continue
        if " — " in part:
            left, right = part.split(" — ", 1)
            rows.append((left.strip().rstrip("."), right.strip().rstrip(".")))
        elif ": " in part and len(part) < 220:
            left, right = part.split(": ", 1)
            rows.append((left.strip().rstrip("."), right.strip().rstrip(".")))
    if len(rows) < 2:
        return None
    table = "| Point | Detail |\n| --- | --- |\n"
    for left, right in rows[:4]:
        table += f"| {left} | {right} |\n"
    return table


out: list[str] = []
out.append('<h1 style="color:#2563eb;">.NET Senior Interview Q&amp;A</h1>')
out.append("")
out.append("## Goal")
out.append("")
out.append('<p style="color:#374151;">')
out.append(
    'This roadmap contains <strong style="color:#16a34a;">215 real-world .NET senior interview questions</strong> '
    "with clear answers — C#, ASP.NET Core, EF Core, security, messaging, and system design."
)
out.append("</p>")
out.append("")
out.append("---")
out.append("")
out.append("## Topic Index")
out.append("")
out.append('<ul style="line-height:1.8;">')

for bnum, btitle, qstart, qend, color, _desc in buckets:
    bid = f"bucket-{bnum}"
    out.append(
        f'  <li><a href="#{bid}"><span style="color:{color};font-weight:700;">Bucket {bnum}:</span> '
        f'<span style="color:#111827;">{btitle}</span></a> '
        f'<span style="color:#6b7280;">(Q{qstart}–Q{qend})</span></li>'
    )
    for qn in range(qstart, min(qend + 1, qstart + 6)):
        if qn in questions:
            q = questions[qn]
            short = q["title"][:68] + ("…" if len(q["title"]) > 68 else "")
            out.append(
                f'  <li style="margin-left:1.5rem;"><a href="#q-{qn}">'
                f'<span style="color:{color};font-weight:600;">Q{qn}.</span> {short}</a></li>'
            )
    if qend - qstart + 1 > 6:
        out.append(f'  <li style="margin-left:1.5rem;color:#6b7280;">… Q{qstart + 6}–Q{qend}</li>')

out.append(
    '  <li><a href="#final-preparation-checklist"><span style="color:#9333ea;font-weight:700;">Guide:</span> '
    "Final Preparation Checklist</a></li>"
)
out.append("</ul>")
out.append("")
out.append("---")
out.append("")

for bnum, btitle, qstart, qend, _color, desc in buckets:
    bid = f"bucket-{bnum}"
    out.append(f'<a id="{bid}"></a>')
    out.append("")
    out.append(f"## Bucket {bnum} — {btitle}")
    out.append("")
    out.append(f"<p style=\"color:#6b7280;\">{desc}</p>")
    out.append("")
    out.append("---")
    out.append("")

    for qn in range(qstart, qend + 1):
        if qn not in questions:
            continue
        q = questions[qn]
        if qn in chapter_map:
            ch_num, ch_title = chapter_map[qn]
            out.append(f'<a id="ch-{bnum}-{ch_num}"></a>')
            out.append("")
            out.append(f"### Ch {ch_num} — {ch_title}")
            out.append("")

        out.append(f'<a id="q-{qn}"></a>')
        out.append("")
        out.append(f'#### Q{qn}. {q["title"]}')
        out.append("")

        if is_diff_question(q["title"]):
            table = try_diff_table(q["answer"])
            if table:
                out.append(table)
                out.append("")

        out.append("**Answer**")
        out.append("")
        out.append(q["answer"])
        out.append("")

        example = format_example(q["example"])
        if example:
            out.append("**Example**")
            out.append("")
            out.append(example)
            out.append("")

        out.append(f'> **One-liner:** {first_sentence(q["answer"])}')
        out.append("")
        out.append("---")
        out.append("")

out.append('<a id="final-preparation-checklist"></a>')
out.append("")
out.append("## Final Preparation Checklist")
out.append("")
checklist = [
    "Can explain value vs reference types, boxing, and memory model.",
    "Can explain async/await, Task, and ConfigureAwait.",
    "Can describe GC generations, IDisposable, and using patterns.",
    "Can explain DI lifetimes, middleware pipeline, and Minimal APIs.",
    "Can describe EF Core tracking, migrations, and query performance.",
    "Can explain JWT, OAuth, caching strategies, and MassTransit basics.",
    "Can design resilient HTTP clients with Polly and IHttpClientFactory.",
    "Can explain OpenTelemetry traces, metrics, logs, and Aspire hosting.",
]
for item in checklist:
    out.append(f"- {item}")
out.append("")

out_path.write_text("\n".join(out), encoding="utf-8")
print(f"Wrote {out_path} ({len(out)} blocks, {out_path.stat().st_size // 1024} KB)")
