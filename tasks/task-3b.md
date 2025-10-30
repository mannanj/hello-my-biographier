### Task 3B: Interpretation Engine
**Dependencies:** Task 3A, Task 10C
**Blocks:** Task 3C, Task 4A, Task 4C
**Estimated time:** 3-4 hours

- [ ] Design interpretation prompt templates for resume analysis (`lib/claude/prompts.ts`)
- [ ] Create interpretation logic to extract skills, roles, companies, dates
- [ ] Implement source linking (include source IDs and text excerpts)
- [ ] Add confidence score calculation (0.0-1.0) based on Claude output
- [ ] Create interpretation normalizer (`lib/normalizers/interpreter.ts`)
- [ ] Build POST `/api/interpret` endpoint accepting source IDs
- [ ] Save interpretations to `/data/interpreted/` with proper structure
- [ ] Validate interpretations against TypeScript types (`types/interpretation.ts`)
- [ ] Test with real resume source data
- Location: `lib/claude/prompts.ts`, `lib/normalizers/interpreter.ts`, `app/api/interpret/route.ts`
