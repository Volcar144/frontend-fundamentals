# 🌊 Tailwind CSS

## What is Tailwind?
Tailwind is a **utility-first CSS framework** — instead of writing custom CSS, you compose styles directly in your HTML/JSX using small, single-purpose classes.

## Setup (with Next.js)
```bash
npx create-next-app@latest my-app --typescript --tailwind
```

---

## 1. Layout — Flexbox

```html
<div class="flex items-center justify-between gap-4">
  <div class="flex flex-col items-start">...</div>
  <div class="flex-1">Takes remaining space</div>
</div>
```

| Class | CSS Equivalent |
|---|---|
| `flex` | `display: flex` |
| `items-center` | `align-items: center` |
| `justify-between` | `justify-content: space-between` |
| `gap-4` | `gap: 1rem` |
| `flex-1` | `flex: 1 1 0%` |

## 2. Layout — Grid

```html
<div class="grid grid-cols-3 gap-6">
  <div class="col-span-2">Wide card</div>
  <div>Narrow card</div>
</div>
```

## 3. Spacing

```html
<!-- p = padding, m = margin, t/b/l/r/x/y = direction -->
<div class="p-4 m-2 px-6 py-3 mt-8 mb-4 mx-auto">
```

Tailwind's spacing scale: `1 = 4px`, `2 = 8px`, `4 = 16px`, `6 = 24px`, `8 = 32px`

## 4. Typography

```html
<h1 class="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
<p class="text-base text-gray-600 font-medium leading-relaxed">
<span class="text-sm text-gray-400 uppercase tracking-widest">
```

## 5. Colours

```html
<div class="bg-blue-500 text-white border border-blue-700">
<div class="bg-red-100 text-red-800 border border-red-200">
<div class="bg-green-50 text-green-700">
```

Colour scale: `50` (lightest) → `950` (darkest)

## 6. States

```html
<!-- Hover, focus, active -->
<button class="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 active:scale-95 transition-all">

<!-- Focus-visible (keyboard nav only) -->
<a class="focus-visible:ring-2 focus-visible:ring-offset-2 outline-none">

<!-- Disabled -->
<input class="disabled:opacity-50 disabled:cursor-not-allowed">
```

## 7. Responsive Design (Mobile First)

```html
<!-- base (all) → sm (640px) → md (768px) → lg (1024px) → xl (1280px) -->
<div class="w-full md:w-1/2 lg:w-1/3">
<p class="text-sm md:text-base lg:text-lg">
<nav class="hidden md:flex">
```

## 8. Dark Mode

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
<button class="border-gray-200 dark:border-gray-700">
```

In `tailwind.config.ts`:
```ts
export default {
  darkMode: "class", // or "media"
  // ...
}
```

## 9. Animations & Transitions

```html
<div class="transition-all duration-300 ease-in-out">
<div class="animate-spin">
<div class="animate-pulse">
<div class="animate-bounce">

<!-- Scale on hover -->
<card class="hover:scale-105 transition-transform duration-200">
```

## 10. Custom Config

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
} satisfies Config;
```

## 11. Component Patterns

### Button variants
```html
<!-- Primary -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
<!-- Secondary -->
<button class="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
<!-- Destructive -->
<button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
<!-- Ghost -->
<button class="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
```

### Card
```html
<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
  <h3 class="text-lg font-semibold text-gray-900">Title</h3>
  <p class="mt-2 text-sm text-gray-500">Description</p>
</div>
```

### Badge
```html
<span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
  Active
</span>
```

## 12. @apply for Reusable Classes

```css
/* globals.css */
.btn {
  @apply inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2;
}

.btn-primary {
  @apply btn bg-blue-600 text-white hover:bg-blue-700;
}
```
