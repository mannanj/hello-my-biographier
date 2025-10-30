### Task 10C: Source Storage & API
**Dependencies:** Task 10A, Task 10B
**Blocks:** Task 10D, Task 3B
**Estimated time:** 2 hours

- [ ] Create source storage utility to save JSON to `/data/sources/` (`lib/storage/sources.ts`)
- [ ] Implement source ID generation (timestamp + UUID-based)
- [ ] Add filename sanitization to prevent path traversal: `filename.replace(/[^a-zA-Z0-9._-]/g, '_')`
- [ ] Build POST `/api/parse` endpoint with `export const runtime = 'nodejs'`
- [ ] Add server-side file validation (MIME type checking, 50MB size limit)
- [ ] Integrate parsers with API endpoint (route uploaded file to correct parser)
- [ ] Validate rawText is not empty before saving (return clear error if empty)
- [ ] Validate source data against TypeScript types (`types/source.ts`)
- [ ] Add error responses for invalid files (wrong type, parsing failure, empty content)
- [ ] Test API endpoint with Postman or curl
- [ ] Return source ID and metadata in API response
- Location: `lib/storage/sources.ts`, `app/api/parse/route.ts`
