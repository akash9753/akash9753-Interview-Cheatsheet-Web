import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MarkdownContent } from './MarkdownContent';
import { TableOfContents } from '../utils/toc';
import { extractHeadings } from '../utils/headings';

export function CourseLayout({ brand, markdown }) {
  const headings = extractHeadings(markdown);

  useEffect(() => {
    if (!headings.length) return undefined;

    const headingEls = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!headingEls.length) return undefined;

    function expandToLink(link) {
      let node = link.closest('.toc-children');
      while (node) {
        node.classList.remove('collapsed');
        const btn = node.previousElementSibling?.querySelector('.toc-arrow-btn');
        btn?.setAttribute('aria-expanded', 'true');
        node = node.parentElement?.closest('.toc-children');
      }
    }

    function setActive(id) {
      document.querySelectorAll('aside .is-active, aside .is-active-parent').forEach((el) => {
        el.classList.remove('is-active', 'is-active-parent');
      });

      const activeLink = document.querySelector(`aside [href="#${CSS.escape(id)}"]`);
      if (!activeLink) return;

      activeLink.classList.add('is-active');

      const toggle = activeLink.closest('.toc-toggle');
      if (toggle && activeLink.classList.contains('toc-title')) {
        toggle.classList.add('is-active');
      }

      let parent = activeLink.closest('.toc-children');
      while (parent) {
        const parentToggle = parent.previousElementSibling;
        if (parentToggle?.classList.contains('toc-toggle')) {
          parentToggle.classList.add('is-active-parent');
        }
        parent = parent.parentElement?.closest('.toc-children');
      }

      expandToLink(activeLink);
    }

    let ticking = false;
    function updateActive() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const offset = 96;
        let current = headingEls[0]?.id;

        for (const el of headingEls) {
          if (el.getBoundingClientRect().top <= offset) {
            current = el.id;
          }
        }

        if (current) setActive(current);
      });
    }

    const raf = requestAnimationFrame(updateActive);
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive, { passive: true });

    function handleScrollSpy(event) {
      const { id } = event.detail ?? {};
      if (id) setActive(id);
    }
    document.addEventListener('toc-scrollspy', handleScrollSpy);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
      document.removeEventListener('toc-scrollspy', handleScrollSpy);
      document.querySelectorAll('aside .is-active, aside .is-active-parent').forEach((el) => {
        el.classList.remove('is-active', 'is-active-parent');
      });
    };
  }, [markdown, headings]);

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

      document.dispatchEvent(new CustomEvent('toc-scrollspy', { detail: { id: href.slice(1) } }));
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
