const SKIP_SELECTOR = '.code-block, script, style, mark.search-highlight, .course-search';

export function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function clearSearchHighlights(root) {
  if (!root) return;

  root.querySelectorAll('mark.search-highlight').forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function collectTextNodes(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.textContent) return NodeFilter.FILTER_REJECT;
      if (parent.closest(SKIP_SELECTOR)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  return nodes;
}

export function highlightMatches(root, query) {
  clearSearchHighlights(root);

  const trimmed = query.trim();
  if (!trimmed || !root) return [];

  const regex = new RegExp(escapeRegExp(trimmed), 'gi');
  const textNodes = collectTextNodes(root);

  for (const node of textNodes) {
    const text = node.textContent;
    regex.lastIndex = 0;

    if (!regex.test(text)) continue;
    regex.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = match[0];
      fragment.appendChild(mark);
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    node.parentNode.replaceChild(fragment, node);
  }

  return Array.from(root.querySelectorAll('mark.search-highlight'));
}

export function setActiveHighlight(matches, index) {
  matches.forEach((mark, i) => {
    mark.classList.toggle('search-highlight-active', i === index);
  });

  const active = matches[index];
  if (active) {
    active.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
