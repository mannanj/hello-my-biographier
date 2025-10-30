### Task 3A: Claude API Foundation
**Dependencies:** Task 9 ✅
**Blocks:** Task 3B
**Estimated time:** 1-2 hours

- [ ] Install Anthropic SDK: `npm install @anthropic-ai/sdk`
- [ ] Create Claude API client wrapper (`lib/claude/client.ts`) using Anthropic SDK
- [ ] Configure to use Sonnet 3.5 model (`claude-3-5-sonnet-20241022`) for cost efficiency
- [ ] Implement API key loading from environment variables (ANTHROPIC_API_KEY)
- [ ] Verify API key is only accessed in server-side code (never sent to client)
- [ ] Create basic message sending function (sendMessage with prompt)
- [ ] Add error handling for API failures (network errors, invalid key, rate limits)
- [ ] Implement retry logic with exponential backoff (built-in to SDK)
- [ ] Create TypeScript types for API responses (`lib/claude/types.ts`)
- [ ] Test connection with simple prompt ("Say hello")
- [ ] Add request/response logging for debugging
- Location: `lib/claude/client.ts`, `lib/claude/types.ts`

**Security Note:** All Claude API calls MUST happen in API routes (server-side only), never in client components.
