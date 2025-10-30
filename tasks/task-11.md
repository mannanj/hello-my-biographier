### Task 11: Command Bar Navigation System
**Dependencies:** Task 9 ✅
**Blocks:** Task 10A (upload page needs navigation)
**Estimated time:** 1-2 hours

- [ ] Create `app/components/CommandBar.tsx` with keyboard-driven command palette (activated by `/` key)
- [ ] Add search filtering with multi-field matching (label, description, keywords)
- [ ] Implement arrow key navigation (↑↓) and Enter to execute
- [ ] Add commands for: Upload, Sources, Review, Timeline, Biography, Export pages
- [ ] Integrate CommandBar into root layout (`app/layout.tsx`)
- [ ] Add bottom-left trigger button: "Open Commands" with `H` keyboard hint (clickable)
- [ ] Style with Tailwind CSS (teal theme for selected items, button at `fixed bottom-4 left-4`)
- [ ] Add keyboard hints footer in modal (↑↓ Navigate, ↵ Select, Esc Close)
- [ ] Remove dark mode support (light mode only per DESIGN_SYSTEM.md)
- [ ] Test navigation flow: Press `/` OR click button → search → arrow keys → Enter → routes correctly
- Location: `app/components/CommandBar.tsx`, `app/layout.tsx`

**Notes:**
- Use Next.js `useRouter()` for client-side navigation
- Command structure: `{ id, label, description, route?, action?, keywords[] }`
- Overlay backdrop: `fixed inset-0 z-50 bg-black/50`
- Selected item highlight: `bg-teal-50` (matching teal brand color)
- No external dependencies required (pure React + Next.js)
