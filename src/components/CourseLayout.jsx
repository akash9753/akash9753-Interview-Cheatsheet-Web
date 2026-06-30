import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MarkdownContent } from './MarkdownContent';
import { TableOfContents } from '../utils/toc';
import { extractHeadings } from '../utils/headings';

export function CourseLayout({ brand, markdown }) {
  const headings = extractHeadings(markdown);

  useEffect(() => {
    function handleAsideClick(event) {
      const button = event.target.closest('.toc-arrow-btn');
      if (button) {
        const children = button.closest('.toc-toggle')?.nextElementSibling;
        if (!children) return;

        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        children.classList.toggle('collapsed', expanded);
        return;
      }

      const link = event.target.closest('aside .toc-link, aside .toc-title');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }

    document.addEventListener('click', handleAsideClick);
    return () => document.removeEventListener('click', handleAsideClick);
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
