import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MarkdownContent } from './MarkdownContent';
import { TableOfContents } from '../utils/toc';
import { extractHeadings } from '../utils/headings';

export function CourseLayout({ brand, markdown }) {
  const headings = extractHeadings(markdown);

  useEffect(() => {
    function handleToggle(event) {
      const button = event.target.closest('.toc-arrow-btn');
      if (!button) return;

      const children = button.closest('.toc-toggle')?.nextElementSibling;
      if (!children) return;

      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      children.classList.toggle('collapsed', expanded);
    }

    document.addEventListener('click', handleToggle);
    return () => document.removeEventListener('click', handleToggle);
  }, []);

  return (
    <div className="layout">
      <aside>
        <Link className="home-link" to="/">← All Courses</Link>
        <h2 className="brand">{brand}</h2>
        <TableOfContents headings={headings} />
      </aside>
      <main id="top">
        <MarkdownContent markdown={markdown} />
      </main>
      <a className="top-link" href="#top">Top</a>
    </div>
  );
}
