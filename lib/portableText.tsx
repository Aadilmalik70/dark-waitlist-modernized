import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from './sanity';
import Image from 'next/image';

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(400).fit('crop').url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
          {value.alt && (
            <p className="text-center text-sm text-gray-400 mt-2">{value.alt}</p>
          )}
        </div>
      );
    },
    codeBlock: ({ value }) => (
      <div className="my-8">
        <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto">
          <code className={`language-${value.language || 'text'} text-gray-300`}>
            {value.code}
          </code>
        </pre>
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-6 text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold my-4 text-gray-200">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold my-4 text-gray-300">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-6 my-6 italic text-gray-400 bg-gray-900/50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4 text-gray-300 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4 text-gray-300 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-purple-300">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};