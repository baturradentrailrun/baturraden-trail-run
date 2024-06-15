import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import Link from "next/link";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold mb-3 dark:text-white text-slate-900">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold mb-2 dark:text-white text-slate-900">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-bold mb-2 dark:text-white text-slate-900">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-md font-semibold mb-2 dark:text-white text-slate-900">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-sm font-semibold mb-1 text-white dark:text-slate-900">
          {children}
        </h6>
      ),
      p: ({ children }) => <p className="mb-4">{children}</p>,
    },
    marks: {
      link: ({ children, value }) => (
        <Link
          href={value?.href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-500 underline"
        >
          {children}
        </Link>
      ),
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
