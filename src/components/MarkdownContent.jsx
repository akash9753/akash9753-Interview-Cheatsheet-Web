import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { CodeBlock } from './CodeBlock';

function assetUrl(src) {
  if (!src) return src;
  if (src.startsWith('http') || src.startsWith('/')) return src;
  return `/${src}`;
}

function headingTag(level) {
  return ({ id, children }) => {
    const Tag = `h${level}`;
    return (
      <Tag id={id}>
        <a className="heading-anchor" href={`#${id}`}>
          {children}
        </a>
      </Tag>
    );
  };
}

export function MarkdownContent({ markdown }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      components={{
        h1: headingTag(1),
        h2: headingTag(2),
        h3: headingTag(3),
        h4: headingTag(4),
        h5: headingTag(5),
        h6: headingTag(6),
        hr: () => <hr className="section-divider" />,
        img: ({ src, alt }) => (
          <figure className="content-figure">
            <img src={assetUrl(src)} alt={alt ?? ''} />
            {alt ? <figcaption>{alt}</figcaption> : null}
          </figure>
        ),
        table: ({ children }) => (
          <div className="table-wrap">
            <table>{children}</table>
          </div>
        ),
        pre: ({ children }) => children,
        code: ({ className, children }) => {
          if (className) {
            return <CodeBlock className={className}>{children}</CodeBlock>;
          }
          return <code>{children}</code>;
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
