### Task 12: Data Integrity & Edge Case Handling
**Dependencies:** Task 3B (Interpretation Engine), Task 4A (Timeline Generation)
**Blocks:** Task 5A (Data Validation)
**Estimated time:** 2-3 hours

- [ ] Implement soft delete for sources (mark as `deleted: true`, preserve all data, hide from UI)
- [ ] Add "Show deleted sources" toggle in Source Management UI for recovery
- [ ] Implement orphaned interpretation handler (when source is soft-deleted, mark interpretations as "source unavailable")
- [ ] Add conflict detection for contradictory data across sources (different dates, titles, companies for same period)
- [ ] Create ConflictResolver component with side-by-side comparison UI
- [ ] Let user choose which source to trust (manual resolution)
- [ ] Default to most recent source if user skips, but lower confidence score to flag uncertainty
- [ ] Add cascade delete confirmation: "Deleting this source will affect 5 interpretations. Continue?"
- [ ] Test cascade scenarios: soft delete source → mark interpretations → update synthesis → verify all links preserved
- [ ] Add data recovery flow: restore soft-deleted source → re-activate interpretations
- Location: `lib/validators/integrity.ts`, `app/components/ConflictResolver.tsx`, `app/api/sources/[id]/delete/route.ts`

**Data Integrity Principles:**
- **NEVER hard delete source data** - all original text is preserved permanently
- Always maintain bidirectional links (interpretations ↔ sources, synthesis ↔ interpretations)
- Soft delete preserves audit trail and allows recovery
- Conflict resolution prioritizes user control with reasonable defaults

**Conflict Detection Logic:**
- Same time period with different role/company
- Contradictory skill proficiency levels
- Different employment dates for same position
- Flag confidence as `amber` (medium) when conflicts exist
