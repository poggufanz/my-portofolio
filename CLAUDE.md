# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 14, showcasing full-stack development experience. Single-page application with sections for hero, about, experience, projects, and contact.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **React**: v19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom theme variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Animation**: GSAP 3 + ScrollTrigger via `@gsap/react` (`useGSAP`)
- **Fonts**: Google Fonts (Syne, Archivo) via next/font
- **Analytics**: Vercel Analytics
- **Package Manager**: npm (npm ci for CI, npm install locally)

## Directory Structure

```
my-portofolio/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main entry point - assembles all sections
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── globals.css          # Global styles + Tailwind + theme CSS variables
│   └── fonts/               # Custom font files
├── components/              # Reusable React components
│   ├── ui/                  # shadcn/ui components (auto-generated)
│   ├── fx/                  # GSAP effect components (preloader, custom cursor,
│   │                        #   scroll progress, magnetic wrapper, velocity marquee)
│   ├── navbar.tsx           # Navigation header (GSAP hide-on-scroll)
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About/bio section
│   ├── experience.tsx       # Work experience
│   ├── projects.tsx         # Projects showcase
│   └── contact.tsx          # Contact form
├── lib/                     # Utilities (if needed)
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration with custom colors
├── tsconfig.json            # TypeScript config (path alias: @/*)
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── components.json          # shadcn/ui configuration
└── postcss.config.mjs       # PostCSS configuration
```

## Common Commands

**Development:**
```bash
npm run dev
```
Starts dev server at http://localhost:3000. File changes auto-refresh.

**Production Build:**
```bash
npm run build
```
Compiles TypeScript, bundles assets. Output in `.next/`.

**Run Production:**
```bash
npm start
```
Starts built app (requires `npm run build` first).

**Linting:**
```bash
npm run lint
```
Runs ESLint with Next.js rules.

**Static Export:**
```bash
npm run export
```
Generates static HTML/CSS/JS for hosting (if using `output: 'export'` in next.config.js).

## Architecture & Data Flow

### Single Page with Sections

The app is not a multi-page site. `app/page.tsx` imports and renders all sections vertically:

```
main (min-h-screen bg-[var(--neo-bg)])
├── Navbar       (sticky header with navigation)
├── Hero         (welcome + CTA)
├── About        (bio + skills)
├── Experience   (work history)
├── Projects     (portfolio projects)
└── Contact      (contact form)
```

Each component manages its own internal state. No global state management currently needed.

### Component Types

- **Presentational**: `Hero`, `About`, `Projects` — render static/formatted content
- **Form Component**: `Contact` — uses React Hook Form for validation
- **Layout**: `Navbar` — persistent header, likely sticky positioning
- **Utility**: `components/ui/*` — shadcn primitives (buttons, inputs, etc.)

### Styling Approach

- **Tailwind CSS 4** with custom theme variables in `globals.css`
- **CSS Variables**: Theme colors use HSL variables (`--neo-bg`, `--color-text`, etc.)
- **Dark Mode**: Configured in `tailwind.config.ts` as `darkMode: "class"`
- **Custom Fonts**: Syne (headings) and Archivo (body) via next/font (auto-optimized)

Theme colors are defined as CSS variables for easy switching (light/dark modes).

## Key Configuration Details

### Path Aliases

`tsconfig.json` defines `@/*` → project root. Use:
```typescript
import Navbar from "@/components/navbar"  // ✓
import Navbar from "../components/navbar"  // ✗
```

### Custom Theme (Tailwind)

`tailwind.config.ts` extends defaults with:
- Custom HSL colors (background, foreground, card, primary, accent, etc.)
- Border radius tokens (`--radius`)
- Dark mode support via `darkMode: "class"`

Theme CSS variables set in `app/globals.css`. Add new theme colors by:
1. Define CSS variable in `globals.css` (e.g., `--neo-accent: 210 100% 50%`)
2. Add to `tailwind.config.ts` theme colors object

### Next.js Metadata

Configured in `app/layout.tsx`:
- Title: "Muhammad Faiq — Full Stack Developer"
- Base URL: https://poggufanz.github.io (for canonical links)
- Theme color: #FEF3E2 (browser address bar)

Update these in `layout.tsx` if needed.

### Image Loader

`imageLoader.js` handles image optimization. Check its config if custom CDN or image transform logic is needed.

## Development Guidelines

### Components

- **File naming**: PascalCase for components (e.g., `Hero.tsx`), camelCase for utilities
- **Props**: Define interface/type for each component's props
- **State**: Use `useState` for local state; prefer `useCallback` for stable event handlers
- **No global state lib**: If complexity grows, consider Zustand or Jotai

### Forms

`Contact` component uses React Hook Form + Zod:
```typescript
const form = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })
```
Add new form fields by updating Zod schema + form fields.

### Animation (GSAP)

- Import from `@/lib/gsap` (registers ScrollTrigger once); never import `gsap` directly
- Section entrance reveals: `useNeoReveal` hook from `@/lib/use-neo-reveal` + `data-reveal` attribute on items
- All motion wrapped in `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)` — reduced-motion users get static content
- Pointer-dependent effects (cursor, magnetic, tilt) additionally gated by `(pointer: fine)` — never run on touch devices
- Hero intro timeline delayed `INTRO_DELAY` (1.5s) to sync with preloader wipe

### Styling

- Prefer utility classes (Tailwind)
- Avoid inline styles; use CSS modules or Tailwind for scoped styles
- Theme colors via CSS variables: `bg-[var(--neo-bg)]`
- Dark mode: use `dark:` prefix for dark variants

### TypeScript

- Strict mode enabled (`"strict": true`)
- All public component props typed
- No `any` types; use `unknown` and narrow when needed
- Let TypeScript infer local variable types

### Testing

Currently no test setup. If adding tests:
- Use Vitest (common with Next.js) or Jest
- Test UI with Playwright for critical user flows
- Aim for 80%+ coverage on utilities and component logic

## Build & Deployment

### Local Build

```bash
npm install      # First time only
npm run build
npm start        # Test production build locally
```

### Deployment

Currently configured for static export to GitHub Pages (base URL: `https://poggufanz.github.io`).

If deploying elsewhere:
1. Update `metadataBase` URL in `app/layout.tsx`
2. Adjust `next.config.js` image loader if needed
3. Rebuild and deploy built `.next/` directory

### CI/CD

No GitHub Actions configured yet. For automated deploys:
- Add `.github/workflows/deploy.yml` to build on push
- Run `npm ci` → `npm run build` → deploy to hosting

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**TypeScript errors in IDE:**
Restart TypeScript server (Ctrl+Shift+P → "TypeScript: Restart TS Server" in VS Code).

**Styles not applying:**
Check if CSS variables are defined in `globals.css`. Verify Tailwind `content` paths match actual file locations.

**Build fails:**
```bash
npm run lint      # Check for linting errors
npm run build     # See full error output
```

## Future Improvements

- [ ] Add E2E tests (Playwright)
- [ ] Implement dark mode toggle (components in place; needs localStorage)
- [ ] Form submission endpoint (currently a form UI only)
- [ ] Blog or projects dynamic data (consider database or CMS)
- [ ] Analytics dashboard (Vercel Analytics installed but not configured)
