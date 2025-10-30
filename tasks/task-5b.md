### Task 5B: Export Functionality
**Dependencies:** Task 4B, Task 4C
**Blocks:** None (Final task!)
**Estimated time:** 2-3 hours

- [ ] Create JSON export function (all three layers) (`lib/exporters/json.ts`)
- [ ] Create Markdown export function (biography + timeline) (`lib/exporters/markdown.ts`)
- [ ] Create PDF export function (formatted biography) (`lib/exporters/pdf.ts`)
- [ ] Build export UI page with format selection (`app/export/page.tsx`)
- [ ] Add download handlers for each format
- [ ] Create GET `/api/export` endpoint with format query parameter
- [ ] Add export preview before download
- [ ] Style export UI with clear format descriptions
- [ ] Test all three export formats with real data
- [ ] Verify exported files are valid and complete
- Location: `app/api/export/route.ts`, `lib/exporters/`, `app/export/page.tsx`
