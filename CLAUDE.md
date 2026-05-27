# Petal UI — Design System

## Context

This is the design system for a startup. The human is the founding product designer responsible for establishing the design language, component library, and documentation. Claude acts as a design system engineering partner — implementing decisions, suggesting best practices, and keeping the system consistent.

## Stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Component library**: `packages/ui` — built with TypeScript + Tailwind CSS + CVA
- **Docs**: `apps/docs` — Storybook v8
- **Styling**: Tailwind CSS with CSS custom properties as the token layer
- **Build**: tsup (ESM + CJS output)

## Dev Workflow

- **Start everything**: `pnpm storybook` — runs `turbo run dev` which starts both the ui package watcher (tsup + tailwindcss in watch mode) and Storybook simultaneously
- **After adding new components**: the watcher rebuilds `dist/` automatically — no manual build step needed
- **Before shipping**: run `pnpm build` to do a full clean build

## Ground Rules

1. **Token-first** — never hardcode values in components. Every color, size, radius, and shadow must reference a CSS custom property from `packages/ui/src/styles.css`. If a value doesn't exist, add it to the token system first.

2. **One component, one folder** — each component lives in `packages/ui/src/components/ComponentName/ComponentName.tsx` with an `index.ts` barrel export.

3. **Variants over one-offs** — extend an existing CVA definition before creating a new component. New components only when the use case is genuinely distinct.

4. **Consistent props API** — use the same prop names across all components: `variant`, `size`, `disabled`, `className`. No surprise naming.

5. **Every component gets a story** — no component is considered done without a Storybook story covering all variants, sizes, and states (default, hover, disabled, error, loading where applicable).

6. **Semantic HTML** — buttons are `<button>`, links are `<a>`, inputs are `<input>`. No `<div>` for interactive elements.

7. **Accessible by default** — keyboard navigation, focus rings, and ARIA attributes are required, not optional.

8. **Audit before acting** — before building or changing anything, run `tsc --noEmit` on both `packages/ui` and `apps/docs` to surface any existing errors. Propose fixes and get agreement before proceeding with new work.

## Token System

All tokens are CSS custom properties defined in **two places that must be kept in sync**:
- `packages/ui/src/styles.css` — source for the published npm package
- `apps/docs/src/index.css` — Storybook's copy (PostCSS can't resolve cross-package `@import`)

When updating a token value, always update both files.

### Layers
- **Scale tokens** — the full range of available values (`--text-sm`, `--radius-md`, etc.)
- **Semantic tokens** — decisions made on top of the scale (`--text-h1: var(--text-3xl)`)

### Categories
- Colors: primary, secondary, destructive, surface, border, ring, text
- Typography: font families, type scale (xs–4xl), font weights, line heights
- Semantic headings: `--text-h1` (3xl/30px) through `--text-h4` (lg/18px)
- Border radius: none, sm, md, lg, xl, 2xl, full
- Shadows: sm, md, lg

## Storybook Structure

Sidebar order: **Tokens → Components**

- Tokens/Colors
- Tokens/Typography
- Tokens/Border Radius
- Components/Button
- Components/Input
- Components/Select

### Story conventions
- Show all variants and sizes
- Show concrete values (px, hex) alongside token names in token stories
- Use `layout: 'padded'` for token stories, `layout: 'centered'` for component stories

## Components Built

- **Button** — variants: primary, secondary, outline, ghost, destructive / sizes: sm, md, lg, icon
- **Input** — variants: default, error / sizes: sm, md, lg
- **Select** — built on Radix UI `@radix-ui/react-select` / sub-components: SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectSeparator
- **Badge** — variants: default, secondary, outline, success, warning, destructive
- **Card** — sub-components: CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Dialog** — built on Radix UI `@radix-ui/react-dialog` / sub-components: DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription
- **Checkbox** — built on Radix UI `@radix-ui/react-checkbox`
- **Toggle** — built on Radix UI `@radix-ui/react-switch`
- **Tooltip** — built on Radix UI `@radix-ui/react-tooltip` / wrap stories in `TooltipProvider`
- **Table** — pure component / sub-components: TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption
- **Textarea** — variants: default, error / resize-y, min-h-[80px]
- **Alert** — variants: default, info, success, warning, destructive / sub-components: AlertTitle, AlertDescription
- **Toast** — built on Radix UI `@radix-ui/react-toast` / variants: default, success, warning, destructive / sub-components: ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose, ToastAction

## Roadmap

### Phase 1 — Core components (in progress)
Building foundational components needed before data visualization work begins.

### Phase 2 — Data Visualization
To be scoped once Phase 1 is complete.
