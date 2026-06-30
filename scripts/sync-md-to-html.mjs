import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MD_DIR = path.join(ROOT, 'MarkDownFormat');

const BRAND_NAMES = {
  'aspnet-core-mvc-interview-roadmap': 'Aspnet Core Mvc Interview Roadmap',
  'csharp-fundamentals-interview-roadmap': 'C# Fundamentals',
  'csharp-oops-interview-roadmap': 'Csharp Oops Interview Roadmap',
  'entity-framework-core-interview-roadmap': 'Entity Framework Core Interview Roadmap',
  'mssql learning course': 'MSSQL Learning Course',
  'programming-principles-interview-roadmap': 'Programming Principles',
};

const STYLES = fs.readFileSync(path.join(ROOT, 'csharp-fundamentals-interview-roadmap.html'), 'utf8')
  .match(/<style>([\s\S]*?)<\/style>/)[1];

const PAGE_SCRIPT = `  <script>
    document.querySelectorAll('.toc-toggle').forEach((button) => {
      button.addEventListener('click', (event) => {
        if (event.target.closest('.toc-title')) return;
        const children = button.nextElementSibling;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        children.classList.toggle('collapsed', expanded);
      });
    });

    document.querySelectorAll('.copy-btn').forEach((button) => {
      button.addEventListener('click', async () => {
        const code = button.closest('.code-block').querySelector('pre code').innerText;
        await navigator.clipboard.writeText(code);
        const old = button.innerText;
        button.innerText = 'Copied';
        setTimeout(() => button.innerText = old, 1200);
      });
    });
  </script>`;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&[a-z]+;/gi, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createSlugger() {
  const counts = new Map();
  return (text) => {
    const base = slugify(text) || 'section';
    const count = counts.get(base) ?? 0;
    counts.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

function renderTocNodes(headings, start, end, parentLevel) {
  let html = '';
  let i = start;

  while (i < end) {
    const node = headings[i];
    if (node.level <= parentLevel) break;

    let j = i + 1;
    while (j < end && headings[j].level > node.level) j += 1;
    const hasChildren = j > i + 1;

    if (hasChildren) {
      const toggleClass = node.level === 2 ? 'level-2' : 'level-3';
      const wrapper = node.level === 2 ? 'toc-group' : 'toc-subgroup';
      html += `<div class="${wrapper}"><button type="button" class="toc-toggle ${toggleClass}" aria-expanded="false"><span class="arrow">▶</span><a class="toc-title" href="#${node.id}">${node.html}</a></button><div class="toc-children collapsed">`;
      html += renderTocNodes(headings, i + 1, j, node.level);
      html += '</div></div>';
    } else if (node.level === 3) {
      html += `<a class="toc-link level-3" href="#${node.id}">${node.html}</a>`;
    } else if (node.level === 4) {
      html += `<a class="toc-link level-4" href="#${node.id}">${node.html}</a>`;
    }

    i = j;
  }

  return html;
}

function buildToc(headings) {
  let html = '';
  let i = 0;

  while (i < headings.length) {
    const heading = headings[i];

    if (heading.level === 1) {
      html += `<a class="toc-link level-1" href="#${heading.id}">${heading.html}</a>`;
      i += 1;
      continue;
    }

    if (heading.level === 2) {
      let j = i + 1;
      while (j < headings.length && headings[j].level > 2) j += 1;
      const hasChildren = j > i + 1;

      if (!hasChildren) {
        html += `<a class="toc-link level-2" href="#${heading.id}">${heading.html}</a>`;
      } else {
        html += `<div class="toc-group"><button type="button" class="toc-toggle level-2" aria-expanded="false"><span class="arrow">▶</span><a class="toc-title" href="#${heading.id}">${heading.html}</a></button><div class="toc-children collapsed">`;
        html += renderTocNodes(headings, i + 1, j, 2);
        html += '</div></div>';
      }

      i = j;
      continue;
    }

    i += 1;
  }

  return html;
}

function convertMarkdown(markdown) {
  const slugger = createSlugger();
  const headings = [];

  marked.use({
    gfm: true,
    breaks: false,
    renderer: {
      hr() {
        return '<hr class="section-divider">';
      },
      image({ href, text, title }) {
        const caption = escapeHtml(text || title || '');
        return `<figure class="content-figure"><img src="${href}" alt="${caption}"><figcaption>${caption}</figcaption></figure>`;
      },
      code({ text, lang }) {
        const language = escapeHtml(lang || 'text');
        return `<div class="code-block"><div class="code-toolbar"><span>${language}</span><button type="button" class="copy-btn">Copy</button></div><pre><code class="language-${language}">${escapeHtml(text)}</code></pre></div>`;
      },
      table(token) {
        const header = token.header.map((cell) => `<th>${cell.text}</th>`).join('');
        const body = token.rows
          .map((row) => `<tr>${row.map((cell) => `<td>${cell.text}</td>`).join('')}</tr>`)
          .join('');
        return `<div class="table-wrap"><table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table></div>`;
      },
      heading({ text, depth }) {
        const plain = cheerio.load(`<div>${text}</div>`)('div').text().trim();
        const id = slugger(plain);
        headings.push({ level: depth, id, html: text, text: plain });
        return `<h${depth} id="${id}"><a class="heading-anchor" href="#${id}">${text}</a></h${depth}>`;
      },
    },
  });

  let html = marked.parse(markdown);
  const $ = cheerio.load(`<div>${html}</div>`, null, false);

  $('h1, h2, h3, h4, h5, h6').each((_, element) => {
    const $el = $(element);
    if ($el.attr('id')) return;

    const innerHtml = $el.html() ?? '';
    const plain = $el.text().trim();
    const id = slugger(plain);
    $el.attr('id', id);
    $el.html(`<a class="heading-anchor" href="#${id}">${innerHtml}</a>`);
    headings.push({ level: Number(element.tagName[1]), id, html: innerHtml, text: plain });
  });

  headings.sort((a, b) => {
    const aEl = $(`#${a.id}`).get(0);
    const bEl = $(`#${b.id}`).get(0);
    if (!aEl || !bEl) return 0;
    return $.root().find('*').toArray().indexOf(aEl) - $.root().find('*').toArray().indexOf(bEl);
  });

  const seen = new Set();
  const orderedHeadings = [];
  $('h1, h2, h3, h4, h5, h6').each((_, element) => {
    const id = $(element).attr('id');
    if (!id || seen.has(id)) return;
    seen.add(id);
    const match = headings.find((item) => item.id === id);
    if (match) orderedHeadings.push(match);
  });

  const tocHeadings = orderedHeadings.filter((item) => item.level <= 4);
  const title = tocHeadings.find((item) => item.level === 1)?.text ?? 'Interview Roadmap';

  return {
    title,
    content: $.root().children().toArray().map((node) => $.html(node)).join(''),
    toc: buildToc(tocHeadings),
  };
}

function buildPage(baseName, markdown) {
  const brand = BRAND_NAMES[baseName] ?? baseName;
  const { title, content, toc } = convertMarkdown(markdown);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>${STYLES}
  </style>
</head>
<body>
  <div class="layout">
    <aside>
      <a class="home-link" href="index.html">← All Courses</a>
      <h2 class="brand">${escapeHtml(brand)}</h2>
      <nav class="toc" aria-label="Table of contents">
        ${toc}
      </nav>
    </aside>
    <main id="top">
      ${content}
    </main>
  </div>
  <a class="top-link" href="#top">Top</a>
${PAGE_SCRIPT}
</body>
</html>
`;
}

const mdFiles = fs.readdirSync(MD_DIR).filter((file) => file.endsWith('.md'));

for (const mdFile of mdFiles) {
  const baseName = path.basename(mdFile, '.md');
  const markdown = fs.readFileSync(path.join(MD_DIR, mdFile), 'utf8');
  const html = buildPage(baseName, markdown);
  const outputPath = path.join(ROOT, `${baseName}.html`);
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`Synced ${mdFile} -> ${path.basename(outputPath)}`);
}

console.log(`Done. ${mdFiles.length} HTML files updated.`);
