import { useCallback, useEffect, useRef, useState } from 'react';
import { clearSearchHighlights, highlightMatches, setActiveHighlight } from '../utils/contentSearch';

export function CourseSearch({ contentRootId = 'course-content' }) {
  const [query, setQuery] = useState('');
  const [matchCount, setMatchCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const matchesRef = useRef([]);
  const inputRef = useRef(null);

  const getRoot = useCallback(() => document.getElementById(contentRootId), [contentRootId]);

  const runSearch = useCallback(
    (value) => {
      const root = getRoot();
      if (!root) return;

      const matches = highlightMatches(root, value);
      matchesRef.current = matches;
      setMatchCount(matches.length);
      setActiveIndex(matches.length ? 0 : -1);

      if (matches.length) {
        setActiveHighlight(matches, 0);
      }
    },
    [getRoot],
  );

  const clearSearch = useCallback(() => {
    clearSearchHighlights(getRoot());
    matchesRef.current = [];
    setMatchCount(0);
    setActiveIndex(-1);
  }, [getRoot]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!query.trim()) {
        clearSearch();
        return;
      }
      runSearch(query);
    }, 200);

    return () => window.clearTimeout(timer);
  }, [query, runSearch, clearSearch]);

  useEffect(() => {
    return () => clearSearchHighlights(getRoot());
  }, [getRoot]);

  function goToMatch(direction) {
    const matches = matchesRef.current;
    if (!matches.length) return;

    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % matches.length
        : (activeIndex - 1 + matches.length) % matches.length;

    setActiveIndex(nextIndex);
    setActiveHighlight(matches, nextIndex);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      goToMatch(event.shiftKey ? 'prev' : 'next');
    }
    if (event.key === 'Escape') {
      setQuery('');
      inputRef.current?.blur();
    }
  }

  return (
    <div className="course-search" role="search">
      <label className="course-search-label" htmlFor="course-search-input">
        Search this course
      </label>
      <div className="course-search-row">
        <input
          id="course-search-input"
          ref={inputRef}
          type="search"
          className="course-search-input"
          placeholder="Type to find text…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        {query.trim() ? (
          <>
            <span className="course-search-count" aria-live="polite">
              {matchCount
                ? `${activeIndex + 1} / ${matchCount}`
                : 'No matches'}
            </span>
            <button
              type="button"
              className="course-search-btn"
              onClick={() => goToMatch('prev')}
              disabled={!matchCount}
              aria-label="Previous match"
            >
              ↑
            </button>
            <button
              type="button"
              className="course-search-btn"
              onClick={() => goToMatch('next')}
              disabled={!matchCount}
              aria-label="Next match"
            >
              ↓
            </button>
            <button
              type="button"
              className="course-search-btn course-search-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
