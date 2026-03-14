# 🛠️ Projects

Apply everything you've learned with these five hands-on projects, ordered by complexity.

---

## Project 1 — TypeScript Todo CLI
**Skills:** TypeScript, interfaces, generics, utility types

Build a command-line todo list app using Node.js + TypeScript.

### Requirements
- `Todo` interface with `id`, `title`, `completed`, `createdAt`
- CRUD functions: `addTodo`, `toggleTodo`, `deleteTodo`, `listTodos`
- Filter by status using a generic `filter<T>` function
- Save/load from a JSON file

### Bonus
- Use `zod` for runtime validation
- Add due dates and priority levels

---

## Project 2 — Tailwind Component Library
**Skills:** Tailwind CSS, responsive design, dark mode

Build a set of reusable UI components using only HTML + Tailwind.

### Components to Build
- [ ] Button (primary, secondary, ghost, destructive, loading state)
- [ ] Badge / Chip
- [ ] Card (with image, title, description, footer)
- [ ] Input / Textarea (with label, error, and helper text states)
- [ ] Modal / Drawer
- [ ] Navigation bar (responsive with mobile menu)
- [ ] Skeleton loader
- [ ] Toast notification

### Requirements
- Mobile-first responsive
- Dark mode support
- All interactive states (hover, focus, active, disabled)

---

## Project 3 — UX/UI Redesign Exercise
**Skills:** UX/UI principles, Figma or HTML/CSS

Take an existing bad-UX form or page and redesign it applying all 8 principles.

### The Challenge
You're given a broken registration form (see `examples/bad-form.html`). Fix:
1. Poor visual hierarchy
2. Missing labels and placeholder abuse
3. No feedback states (error, success, loading)
4. Inaccessible colour contrast
5. No keyboard navigation support
6. No empty/error states

### Deliverable
- Before & after screenshots
- Annotated design decisions
- WCAG contrast ratio verification

---

## Project 4 — Next.js Blog
**Skills:** Next.js App Router, TypeScript, Tailwind, SEO

Build a full blog with markdown posts, dynamic routes, and SEO.

### Requirements
- Home page with post list and pagination
- `/blog/[slug]` dynamic route for each post
- Markdown rendering (use `next-mdx-remote` or `gray-matter` + `remark`)
- ISR — revalidate posts every 60 seconds
- Full SEO: `generateMetadata`, Open Graph tags, sitemap
- Dark mode toggle
- Responsive layout

### Bonus
- Search/filter posts by tag
- Reading time estimate
- Table of contents sidebar

---

## Project 5 — Full-Stack App
**Skills:** All four — TypeScript, Tailwind, UX/UI, Next.js + API Routes

Build a full-stack task management app.

### Features
- Auth (use `next-auth` or Clerk)
- Create, edit, delete tasks
- Assign labels, due dates, priority
- Drag-and-drop kanban board
- REST API with proper status codes and validation
- Database: SQLite (via Prisma) or Supabase
- Fully typed end-to-end with TypeScript
- Mobile-first, accessible UI

### Stack suggestion
```
next@latest + typescript + tailwindcss
prisma + sqlite (or @supabase/supabase-js)
next-auth
@dnd-kit/core (drag and drop)
zod (validation)
```
