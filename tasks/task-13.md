### Task 13: Minimal Onboarding & Help
**Dependencies:** Task 11 (Command Bar Navigation)
**Blocks:** None (can be done in parallel with other tasks)
**Estimated time:** 1 hour

- [ ] Add tooltip system for confidence scores (emerald badge = high confidence, amber = medium, red = low)
- [ ] Create empty state for Upload page: "🧍 Drop your resume here to get started" with stick figure
- [ ] Create empty state for Sources page: "🧍 No sources yet. Upload your first document."
- [ ] Create empty state for Review page: "🧍 No interpretations yet. Upload and process sources first."
- [ ] Create empty state for Timeline page: "🧍 No timeline yet. Interpret your sources first."
- [ ] Create empty state for Biography page: "🧍 No biography yet. Generate timeline first."
- [ ] Add "What is Layer 1/2/3?" info tooltips on each page explaining the three-layer architecture
- [ ] Add keyboard shortcut hint on first visit: "Tip: Press `/` to open commands"
- [ ] Test empty states appear correctly on fresh install
- Location: `app/components/EmptyState.tsx`, `app/components/Tooltip.tsx`, all feature pages

**Notes:**
- Stick figure emoji: 🧍 (matches DESIGN_SYSTEM.md brand identity)
- Confidence colors: `bg-emerald-100 text-emerald-800` (high), `bg-amber-100 text-amber-800` (medium), `bg-red-100 text-red-800` (low)
- Keep tooltips minimal and contextual (show on hover, not obtrusive)
- Defer full onboarding modal to post-MVP (not critical for single-user MVP)
