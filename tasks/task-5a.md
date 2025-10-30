### Task 5A: Data Validation & Quality
**Dependencies:** Task 3B, Task 4A
**Blocks:** Task 5B
**Estimated time:** 2-3 hours

- [ ] Create layer validation functions (`lib/validators/layers.ts`)
- [ ] Check all interpretation → source links are valid
- [ ] Check all synthesis → interpretation links are valid
- [ ] Implement data integrity checker (run on app startup)
- [ ] Add Claude API rate limiting middleware (`lib/claude/rateLimiter.ts`)
- [ ] Implement response caching for identical prompts (`lib/claude/cache.ts`)
- [ ] Create error boundary components for React (`app/components/ErrorBoundary.tsx`)
- [ ] Add loading skeletons for all async operations
- [ ] Create integrity report UI showing validation results
- [ ] Test with intentionally broken data links
- Location: `lib/validators/`, `app/components/ErrorBoundary.tsx`, `lib/claude/cache.ts`, `lib/claude/rateLimiter.ts`
