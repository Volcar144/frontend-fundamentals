import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Fundamentals',
  description: 'Learn TypeScript, Tailwind CSS, UX/UI Design, and Next.js — from zero to production.',
};

const topics = [
  {
    title: 'TypeScript',
    emoji: '🟦',
    href: '/docs/typescript',
    description: 'Static typing, interfaces, generics, and utility types.',
    color: 'from-blue-500/10 to-blue-600/10 border-blue-200 dark:border-blue-900',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  },
  {
    title: 'Tailwind CSS',
    emoji: '🌊',
    href: '/docs/tailwind',
    description: 'Utility-first styling, responsive design, and component patterns.',
    color: 'from-cyan-500/10 to-cyan-600/10 border-cyan-200 dark:border-cyan-900',
    badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  },
  {
    title: 'UX/UI Design',
    emoji: '🎨',
    href: '/docs/ux-ui',
    description: 'Visual hierarchy, accessibility, colour theory, and design patterns.',
    color: 'from-purple-500/10 to-purple-600/10 border-purple-200 dark:border-purple-900',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  },
  {
    title: 'Next.js',
    emoji: '⚡',
    href: '/docs/nextjs',
    description: 'App Router, Server Components, data fetching, and API routes.',
    color: 'from-gray-500/10 to-gray-600/10 border-gray-200 dark:border-gray-800',
    badge: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-fd-background to-fd-background/80 px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border bg-fd-card px-3 py-1 text-sm text-fd-muted-foreground">
            🚀 Zero to production-ready
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-fd-foreground sm:text-6xl">
            Frontend{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Fundamentals
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-fd-muted-foreground leading-relaxed">
            A complete guide to <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>,{' '}
            <strong>UX/UI Design</strong>, and <strong>Next.js</strong> — everything you need
            to build modern web apps.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow hover:opacity-90 transition-opacity"
            >
              Start Learning →
            </Link>
            <Link
              href="https://github.com/Volcar144/frontend-fundamentals"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground hover:bg-fd-accent transition-colors"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Topics grid */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold text-fd-foreground">What you'll learn</h2>
        <p className="mb-12 text-center text-fd-muted-foreground">Four core topics, each with examples, patterns, and hands-on projects.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className={`group rounded-2xl border bg-gradient-to-br p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${topic.color}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl">{topic.emoji}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${topic.badge}`}>
                  {topic.title}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-fd-foreground group-hover:text-fd-primary transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects CTA */}
      <section className="border-t bg-fd-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="mb-3 text-2xl font-bold text-fd-foreground">🛠️ Learn by building</h2>
          <p className="mb-6 text-fd-muted-foreground">
            Five hands-on projects — from a TypeScript CLI to a full-stack task manager.
          </p>
          <Link
            href="/docs/projects"
            className="inline-flex items-center gap-2 rounded-lg border bg-fd-background px-5 py-2.5 text-sm font-medium text-fd-foreground hover:bg-fd-accent transition-colors"
          >
            View Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
