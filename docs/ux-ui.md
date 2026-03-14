# 🎨 UX/UI Design Principles

## What's the difference?
- **UX (User Experience)** — How it *feels* to use. Is it intuitive? Is it efficient?
- **UI (User Interface)** — How it *looks*. Typography, colour, spacing, components.

Good design = great UX *and* great UI.

---

## Core Principles

### 1. Visual Hierarchy
Guide the user's eye using **size**, **weight**, and **contrast**.

```
H1 — 48px / Bold        → Page title (one per page)
H2 — 32px / SemiBold    → Section headings
H3 — 24px / SemiBold    → Sub-sections
Body — 16px / Regular   → Main content
Small — 14px / Regular  → Labels, captions, helper text
```

**Rule:** Every page should have one clear focal point — the thing users should look at first.

---

### 2. Consistency
Use the same patterns, components, and language throughout your app.

- Same button style for the same action
- Consistent spacing scale (4, 8, 16, 24, 32, 48px)
- Consistent colour meanings: red = danger, green = success, yellow = warning
- Never change a familiar pattern without good reason

---

### 3. Feedback & Affordance
Users need to know:
1. What is clickable?
2. What just happened?

```html
<!-- Affordance: looks clickable -->
<button class="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm
               hover:bg-blue-700 hover:shadow-md
               active:scale-95
               focus-visible:ring-2 focus-visible:ring-blue-300
               transition-all">
  Submit
</button>
```

**Loading states:** Show a spinner or skeleton when data is loading.
**Success/error states:** Show a toast, colour change, or inline message.

---

### 4. Accessibility (a11y)
Accessibility isn't optional — it's good design.

#### Semantic HTML
```html
<!-- Bad -->
<div class="nav">...</div>
<div class="button">Click me</div>

<!-- Good -->
<nav>...</nav>
<button type="button">Click me</button>
```

#### Colour Contrast
- Normal text: **4.5:1** ratio minimum (WCAG AA)
- Large text (18px+): **3:1** ratio minimum
- Use: https://webaim.org/resources/contrastchecker

#### ARIA Labels
```html
<button aria-label="Close modal"><XIcon /></button>
<img src="/hero.jpg" alt="Developer working at laptop" />
<nav aria-label="Main navigation">
```

#### Keyboard Navigation
- All interactive elements must be reachable by Tab
- Visible focus styles on every interactive element
- Modals should trap focus inside when open

---

### 5. Colour Theory

#### Choose a palette
- **Primary** — your brand colour (calls to action)
- **Secondary** — accent, highlight
- **Neutral** — grays for text, backgrounds, borders
- **Semantic** — red/green/yellow/blue for status

#### Tailwind colour pairings
```html
<!-- Info -->
<div class="bg-blue-50 text-blue-800 border-blue-200">
<!-- Success -->
<div class="bg-green-50 text-green-800 border-green-200">
<!-- Warning -->
<div class="bg-yellow-50 text-yellow-800 border-yellow-200">
<!-- Error -->
<div class="bg-red-50 text-red-800 border-red-200">
```

---

### 6. White Space
White space (negative space) is not empty — it's a design tool.

- Separate unrelated elements with more space
- Group related elements with less space (proximity)
- Don't cram content — let it breathe

```html
<!-- Cramped -->
<div class="p-1">
  <h2 class="mb-0">Title</h2>
  <p class="mt-0">Text right below</p>
</div>

<!-- Breathable -->
<div class="p-8">
  <h2 class="mb-3">Title</h2>
  <p class="mt-0 leading-relaxed">Text with breathing room</p>
</div>
```

---

### 7. Mobile-First & Responsive

- Design for the **smallest screen first**, then scale up
- Touch targets must be ≥ **44×44px**
- Don't rely on hover for key interactions (no hover on mobile)
- Test on real devices, not just browser DevTools

```html
<!-- Stack on mobile, side-by-side on desktop -->
<div class="flex flex-col gap-4 md:flex-row">
  <aside class="w-full md:w-64">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
```

---

### 8. Empty & Loading States
Never leave users staring at a blank screen.

#### Skeleton loader
```html
<div class="animate-pulse">
  <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

#### Empty state
```tsx
<div className="flex flex-col items-center justify-center py-16 text-center">
  <InboxIcon className="h-12 w-12 text-gray-400" />
  <h3 className="mt-4 text-lg font-semibold text-gray-900">No results found</h3>
  <p className="mt-2 text-sm text-gray-500">Try adjusting your search filters.</p>
  <button className="mt-4 btn-primary">Clear filters</button>
</div>
```

---

## Component Design Patterns

### Form best practices
```tsx
<div className="space-y-4">
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email address
    </label>
    <input
      id="email"
      type="email"
      className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2
                 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder="you@example.com"
    />
    {/* Error state */}
    <p className="mt-1 text-sm text-red-600">Please enter a valid email.</p>
  </div>
</div>
```

### Modal / Dialog
- Always have a visible close button
- Close on Escape key
- Trap focus inside the modal
- Overlay should close the modal on click

### Toast Notifications
- Keep messages short and actionable
- Auto-dismiss after 4–5 seconds
- Position: top-right or bottom-center
- Allow manual dismiss
