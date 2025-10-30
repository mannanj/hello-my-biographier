### Task 4A: Timeline Data Generation
**Dependencies:** Task 3B
**Blocks:** Task 4B, Task 5A
**Estimated time:** 2-3 hours

- [ ] Create timeline synthesis prompt for Claude (`lib/claude/prompts.ts`)
- [ ] Build timeline generator function using Claude API (`lib/synthesizers/timeline.ts`)
- [ ] Extract chronological events from interpretations (jobs, education, projects)
- [ ] Link each timeline entry back to interpretation IDs
- [ ] Add date normalization and sorting logic
- [ ] Save timeline data to `/data/synthesized/timeline.json`
- [ ] Create POST `/api/synthesize/timeline` endpoint
- [ ] Validate timeline data against TypeScript types (`types/synthesis.ts`)
- [ ] Test with multiple interpretations
- Location: `lib/synthesizers/timeline.ts`, `app/api/synthesize/route.ts`
