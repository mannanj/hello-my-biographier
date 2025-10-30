### Task 10B: Document Parsers
**Dependencies:** Task 9 ✅
**Blocks:** Task 10C
**Estimated time:** 2-3 hours

- [ ] Install parser dependencies: `npm install pdf-parse mammoth`
- [ ] Create PDF parser with text extraction (`lib/parsers/pdf.ts`)
- [ ] Create DOCX parser with text extraction (`lib/parsers/docx.ts`)
- [ ] Create TXT parser (simple file reader) (`lib/parsers/txt.ts`)
- [ ] Create unified extractor interface (`lib/parsers/extractor.ts`)
- [ ] Add TypeScript types for parser outputs
- [ ] Test each parser with sample PDF, DOCX, and TXT files
- [ ] Add error handling for corrupted or unreadable files
- Location: `lib/parsers/pdf.ts`, `lib/parsers/docx.ts`, `lib/parsers/txt.ts`, `lib/parsers/extractor.ts`
