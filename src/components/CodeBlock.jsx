import { useState } from 'react';

export function CodeBlock({ className, children }) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'text';
  const code = String(children).replace(/\n$/, '');

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>{language}</span>
        <button type="button" className="copy-btn" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>
        <code className={className}>{code}</code>
      </pre>
    </div>
  );
}
