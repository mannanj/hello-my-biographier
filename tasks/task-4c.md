### Task 4C: Biography Generation
**Dependencies:** Task 3B
**Blocks:** Task 5B
**Estimated time:** 2-3 hours

- [ ] Create biography synthesis prompts for 50/150/300 word versions (`lib/claude/prompts.ts`)
- [ ] Build biography generator function using Claude API (`lib/synthesizers/biography.ts`)
- [ ] Link biography statements back to interpretation IDs
- [ ] Save biographies to `/data/synthesized/biography.json`
- [ ] Create POST `/api/synthesize/biography` endpoint with length parameter
- [ ] Build biography viewer UI (`app/biography/page.tsx`)
- [ ] Add length toggle controls (50/150/300 words)
- [ ] Show source traceability on hover (highlight linked interpretations)
- [ ] Style with Tailwind CSS (readable typography, warm colors)
- [ ] Test biography generation with various interpretation sets
- Location: `lib/synthesizers/biography.ts`, `app/biography/page.tsx`
