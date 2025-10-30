### Task 10C: Source Storage & API
**Dependencies:** Task 10A, Task 10B
**Blocks:** Task 10D, Task 3B
**Estimated time:** 2 hours

- [ ] Create source storage utility to save JSON to `/data/sources/` (`lib/storage/sources.ts`)
- [ ] Implement source ID generation (timestamp + UUID-based)
- [ ] Build POST `/api/parse` endpoint to handle file uploads
- [ ] Integrate parsers with API endpoint (route uploaded file to correct parser)
- [ ] Validate source data against TypeScript types (`types/source.ts`)
- [ ] Add error responses for invalid files (wrong type, parsing failure)
- [ ] Test API endpoint with Postman or curl
- [ ] Return source ID and metadata in API response
- Location: `lib/storage/sources.ts`, `app/api/parse/route.ts`
