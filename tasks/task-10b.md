### Task 10B: Document Parsers
**Dependencies:** Task 9 ✅
**Blocks:** Task 10C
**Estimated time:** 2-3 hours

- [ ] Install parser dependencies: `npm install pdf-parse mammoth`
- [ ] Create PDF parser with text extraction (`lib/parsers/pdf.ts`) - server-side only
- [ ] Create DOCX parser with text extraction (`lib/parsers/docx.ts`) - server-side only
- [ ] Create TXT parser (simple file reader) (`lib/parsers/txt.ts`)
- [ ] Create unified extractor interface (`lib/parsers/extractor.ts`)
- [ ] Add TypeScript types for parser outputs
- [ ] Detect image-only/scanned PDFs and return clear error: "Could not extract text. This appears to be a scanned image. Please try a text-based PDF or upload a .txt/.docx file instead."
- [ ] Test each parser with sample PDF, DOCX, and TXT files
- [ ] Add error handling for corrupted or unreadable files
- Location: `lib/parsers/pdf.ts`, `lib/parsers/docx.ts`, `lib/parsers/txt.ts`, `lib/parsers/extractor.ts`

**Note:** Parsers use Node.js runtime (not edge), must be called from API routes with `export const runtime = 'nodejs'`
