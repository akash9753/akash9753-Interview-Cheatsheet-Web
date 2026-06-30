import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&[a-z]+;/gi, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripHtml(text) {
  return text.replace(/<[^>]+>/g, '').trim();
}

export function extractHeadings(markdown) {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown);
  const headings = [];
  const slugCounts = new Map();

  const addHeading = (level, rawText) => {
    if (level > 4) return;
    const text = stripHtml(rawText);
    const base = slugify(text) || 'section';
    const count = slugCounts.get(base) ?? 0;
    slugCounts.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count + 1}`;
    headings.push({ level, text, id, html: rawText });
  };

  visit(tree, (node) => {
    if (node.type === 'heading') {
      addHeading(node.depth, toString(node));
      return;
    }

    if (node.type === 'html') {
      const matches = node.value.matchAll(/<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi);
      for (const match of matches) {
        addHeading(Number(match[1]), match[2]);
      }
    }
  });

  return headings;
}
