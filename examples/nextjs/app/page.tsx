// Example: Next.js App Router page with TypeScript + Tailwind
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Fundamentals",
  description: "Learn TypeScript, Tailwind CSS, UX/UI, and Next.js",
};

const topics = [
  { title: "TypeScript", emoji: "🟦", href: "/docs/typescript", description: "Static typing for JavaScript" },
  { title: "Tailwind CSS", emoji: "🌊", href: "/docs/tailwind", description: "Utility-first CSS framework" },
  { title: "UX/UI Design", emoji: "🎨", href: "/docs/ux-ui", description: "Design principles that matter" },
  { title: "Next.js", emoji: "⚡", href: "/docs/nextjs", description: "React framework for production" },
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Frontend Fundamentals
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Everything you need to build modern, production-ready web apps.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => (
          <a
            key={topic.title}
            href={topic.href}
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
          >
            <span className="text-4xl">{topic.emoji}</span>
            <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
              {topic.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{topic.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
