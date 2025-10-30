### Task 10D: Source Management UI
**Dependencies:** Task 10C, Task 11 (Command Bar Navigation)
**Blocks:** None
**Estimated time:** 1-2 hours

- [ ] Create sources list page (`app/sources/page.tsx`)
- [ ] Display all uploaded sources with metadata (filename, upload date, file type)
- [ ] Add source detail view showing raw extracted text (`app/sources/[id]/page.tsx`)
- [ ] Implement soft delete functionality (mark as `deleted: true`, preserve data, hide from main list)
- [ ] Add "Show deleted sources" toggle for viewing/recovering soft-deleted sources
- [ ] Add confirmation dialog before soft delete: "This will hide the source. You can recover it later from 'Show deleted sources'."
- [ ] Navigation via command bar (already implemented in Task 11)
- [ ] Style with Tailwind CSS (cards, consistent spacing)
- [ ] Add empty state with stick figure illustration: "🧍 No sources yet. Upload your first document."
- [ ] Test full upload → view → soft delete → recover flow
- Location: `app/sources/page.tsx`, `app/sources/[id]/page.tsx`, `lib/storage/sources.ts` (soft delete function)
