# ⚡ Next.js

## What is Next.js?
Next.js is a **React framework** for building full-stack web apps. It adds:
- File-based routing
- Server-side rendering (SSR) & static generation (SSG)
- API routes
- Built-in optimisation (images, fonts, bundles)
- React Server Components

## Create a Project
```bash
npx create-next-app@latest my-app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir
```

---

## 1. App Router File Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout (always rendered)
│   ├── page.tsx          ← Home page (/)
│   ├── loading.tsx       ← Automatic loading UI
│   ├── error.tsx         ← Error boundary
│   ├── not-found.tsx     ← 404 page
│   ├── globals.css
│   └── blog/
│       ├── page.tsx      ← /blog
│       └── [slug]/
│           └── page.tsx  ← /blog/:slug
├── components/
├── lib/
└── types/
```

---

## 2. Server vs Client Components

### Server Component (default)
Runs on the server. Can access databases, secrets, and async data directly.
```tsx
// No "use client" — this is a Server Component
export default async function BlogList() {
  const posts = await fetch("https://api.example.com/posts").then(r => r.json());

  return (
    <ul>
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Client Component
Runs in the browser. Can use hooks, event listeners, and browser APIs.
```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(c => c + 1)}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Count: {count}
    </button>
  );
}
```

**Rule:** Keep components as Server Components as long as possible. Push `"use client"` to the leaves of the component tree.

---

## 3. Layouts

```tsx
// app/layout.tsx — Root layout
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "A great Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gray-50">
        <nav className="border-b bg-white px-6 py-4 shadow-sm">
          {/* Navigation */}
        </nav>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
```

---

## 4. Dynamic Routes

```tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound(); // triggers not-found.tsx

  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

// Generate static pages at build time (SSG)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(p => ({ slug: p.slug }));
}
```

---

## 5. API Routes

```ts
// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  const users = await getUsers(query);
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate
  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await createUser(body);
  return NextResponse.json(user, { status: 201 });
}
```

---

## 6. Data Fetching

```tsx
// Static — cached at build time
const data = await fetch("https://api.example.com/data");

// ISR — revalidate every 60 seconds
const data = await fetch("https://api.example.com/data", {
  next: { revalidate: 60 },
});

// Dynamic — always fresh, never cached
const data = await fetch("https://api.example.com/data", {
  cache: "no-store",
});

// On-demand revalidation (call from API route)
import { revalidatePath } from "next/cache";
revalidatePath("/blog");
```

---

## 7. Metadata & SEO

```tsx
// Static metadata
export const metadata: Metadata = {
  title: "Blog Post Title",
  description: "Post description for SEO",
  openGraph: {
    title: "Blog Post Title",
    description: "Post description",
    images: ["/og-image.png"],
  },
};

// Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}
```

---

## 8. Image Optimisation

```tsx
import Image from "next/image";

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority // preload above-the-fold images
      className="rounded-xl object-cover"
    />
  );
}
```

---

## 9. Link & Navigation

```tsx
import Link from "next/link";
import { useRouter } from "next/navigation";

// Declarative navigation
<Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>

// Programmatic navigation (client component)
"use client";
const router = useRouter();
router.push("/dashboard");
router.back();
```

---

## 10. Environment Variables

```bash
# .env.local
DATABASE_URL="postgres://..."
NEXT_PUBLIC_API_URL="https://api.example.com"  # exposed to client
```

```ts
// Server only (never sent to browser)
const db = process.env.DATABASE_URL;

// Client accessible (NEXT_PUBLIC_ prefix required)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## 11. Middleware

```ts
// middleware.ts (at project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");

  // Redirect unauthenticated users
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
```
