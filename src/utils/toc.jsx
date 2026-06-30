const SKIP_H2_TITLES = new Set(['goal', 'topic index']);

export function filterTocHeadings(headings) {
  return headings.filter((heading) => {
    if (heading.level === 1) return false;
    if (heading.level === 2 && SKIP_H2_TITLES.has(heading.text.trim().toLowerCase())) {
      return false;
    }
    return true;
  });
}

function renderTocNodes(headings, start, end, parentLevel) {
  const nodes = [];
  let i = start;

  while (i < end) {
    const heading = headings[i];
    if (heading.level <= parentLevel) break;

    let j = i + 1;
    while (j < end && headings[j].level > heading.level) j += 1;
    const hasChildren = j > i + 1;
    const itemKey = `${heading.id}-${i}`;

    if (hasChildren) {
      const rowClass = heading.level === 2 ? 'level-2' : 'level-3';
      const wrapper = heading.level === 2 ? 'toc-group' : 'toc-subgroup';
      nodes.push(
        <div className={wrapper} key={itemKey}>
          <div className={`toc-toggle ${rowClass}`}>
            <button type="button" className="toc-arrow-btn" aria-expanded="false" aria-label="Expand section">
              <span className="arrow">▶</span>
            </button>
            <a className="toc-title" href={`#${heading.id}`}>{heading.text}</a>
          </div>
          <div className="toc-children collapsed">
            {renderTocNodes(headings, i + 1, j, heading.level)}
          </div>
        </div>,
      );
    } else if (heading.level === 3) {
      nodes.push(
        <a className="toc-link level-3" href={`#${heading.id}`} key={itemKey}>{heading.text}</a>,
      );
    } else if (heading.level === 4) {
      nodes.push(
        <a className="toc-link level-4" href={`#${heading.id}`} key={itemKey}>{heading.text}</a>,
      );
    }

    i = j;
  }

  return nodes;
}

export function TableOfContents({ headings }) {
  const items = [];
  let i = 0;

  while (i < headings.length) {
    const heading = headings[i];
    const itemKey = `${heading.id}-${i}`;

    if (heading.level === 1) {
      items.push(
        <a className="toc-link level-1" href={`#${heading.id}`} key={itemKey}>{heading.text}</a>,
      );
      i += 1;
      continue;
    }

    if (heading.level === 2) {
      let j = i + 1;
      while (j < headings.length && headings[j].level > 2) j += 1;
      const hasChildren = j > i + 1;

      if (!hasChildren) {
        items.push(
          <a className="toc-link level-2" href={`#${heading.id}`} key={itemKey}>{heading.text}</a>,
        );
      } else {
        items.push(
          <div className="toc-group" key={itemKey}>
            <div className="toc-toggle level-2">
              <button type="button" className="toc-arrow-btn" aria-expanded="false" aria-label="Expand section">
                <span className="arrow">▶</span>
              </button>
              <a className="toc-title" href={`#${heading.id}`}>{heading.text}</a>
            </div>
            <div className="toc-children collapsed">
              {renderTocNodes(headings, i + 1, j, 2)}
            </div>
          </div>,
        );
      }

      i = j;
      continue;
    }

    i += 1;
  }

  return <nav className="toc" aria-label="Table of contents">{items}</nav>;
}
