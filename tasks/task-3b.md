### Task 3B: Interpretation Engine
**Dependencies:** Task 3A, Task 10C
**Blocks:** Task 3C, Task 4A, Task 4C, Task 12
**Estimated time:** 3-6 hours (includes prompt iteration)

- [ ] Design interpretation prompt templates for resume analysis (`lib/claude/prompts.ts`)
- [ ] Create `lib/claude/PROMPTS.md` documenting prompt design decisions with examples
- [ ] Ask Claude to return confidence scores (0.0-1.0) in structured JSON response
- [ ] Create interpretation logic to extract skills, roles, companies, dates
- [ ] Implement hybrid confidence calculation: use Claude's score, adjust based on heuristics (multiple sources = higher, vague dates = lower)
- [ ] Implement source linking (include source IDs and text excerpts)
- [ ] Create interpretation normalizer (`lib/normalizers/interpreter.ts`)
- [ ] Build POST `/api/interpret` endpoint accepting source IDs
- [ ] Add progress indicator: "Analyzing resume... (Step X of Y)"
- [ ] Save interpretations to `/data/interpreted/` with proper structure
- [ ] Validate interpretations against TypeScript types (`types/interpretation.ts`)
- [ ] Test with real resume source data and iterate on prompts
- Location: `lib/claude/prompts.ts`, `lib/claude/PROMPTS.md`, `lib/normalizers/interpreter.ts`, `app/api/interpret/route.ts`

**Note:** Prompt engineering is iterative - expect to refine prompts based on test results. Buffer time included.
