### Task 3A: Claude API Foundation
**Dependencies:** Task 9 ✅
**Blocks:** Task 3B
**Estimated time:** 1-2 hours

- [ ] Create Claude API client wrapper (`lib/claude/client.ts`)
- [ ] Implement API key loading from environment variables
- [ ] Create basic message sending function (sendMessage with prompt)
- [ ] Add error handling for API failures (network errors, invalid key)
- [ ] Implement retry logic with exponential backoff
- [ ] Create TypeScript types for API responses (`lib/claude/types.ts`)
- [ ] Test connection with simple prompt ("Say hello")
- [ ] Add request/response logging for debugging
- Location: `lib/claude/client.ts`, `lib/claude/types.ts`
