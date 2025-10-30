# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hello My Biographier** is a multi-layered truth preservation system for personal career data that maintains accuracy while enabling progressive synthesis and condensation of information.

### Core Philosophy
Condense and clarify information without losing accuracy through a three-layer data architecture where each level maintains bidirectional links to sources, creating an auditable chain of interpretation.

## Task Workflow

**1. Create task file in `tasks/` directory:**
```bash
# Create tasks/task-N.md
```
```markdown
### Task N: Task Title
- [ ] Subtask 1
- [ ] Subtask 2
- Location: `path/to/files`
```

**2. Before starting, verify work isn't already done:**
- Check codebase for task's changes
- Review files in Location field
- If complete but unmarked:
  - Mark subtasks `[x]` in tasks/task-N.md
  - Commit with `[Task-N]` tag
  - Push and skip to next task

**3. Complete subtasks, mark `[x]` in tasks/task-N.md**

**4. Commit:**
```bash
git add .
git commit -m "Task N: Task Title

- [x] Subtask 1
- [x] Subtask 2
- Location: \`path/to/files\`

[Task-N]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

**Requirements:**
- Each task gets its own file: `tasks/task-N.md`
- Complete task entry in commit message
- All subtasks with status
- `[Task-N]` tag for tracking
- One task per commit

**5. Push:** `git push`

## Development Commands

### Quick Start
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint code
npm run lint
```

## Architecture

### Three-Layer Data Model

#### Layer 1: Raw Source Layer (`/data/sources/`)
- **Purpose**: Preserve all original data without loss
- **Format**: JSON with original text from documents/websites/articles
- **Never delete**: All original text is preserved permanently

#### Layer 2: Interpreted/Normalized Layer (`/data/interpreted/`)
- **Purpose**: Structured understanding of source content
- **Format**: Normalized JSON with references to sources
- **Includes**: Source excerpts, confidence scores, interpretation notes
- **Always linked**: Every interpretation references its sources

#### Layer 3: Synthesized Layer (`/data/synthesized/`)
- **Purpose**: Condensed statements inferred from interpreted data
- **Format**: High-level insights and timeline data
- **Traceable**: All synthesis linked back to interpretations

### Application Structure

```
hello-my-biographier/
├── app/                        # Next.js app directory
│   ├── api/                    # API routes
│   │   ├── parse/              # Source parsing endpoints
│   │   ├── interpret/          # Interpretation endpoints (Claude API)
│   │   ├── synthesize/         # Synthesis endpoints (Claude API)
│   │   └── timeline/           # Timeline generation
│   ├── upload/                 # Document upload interface
│   ├── timeline/               # Timeline visualization
│   └── biography/              # Biography viewer
├── data/                       # JSON data storage
│   ├── sources/                # Layer 1: Raw sources
│   ├── interpreted/            # Layer 2: Normalized data
│   └── synthesized/            # Layer 3: Synthesized insights
├── lib/                        # Utilities and helpers
│   ├── claude/                 # Claude API integration
│   ├── parsers/                # Document parsers (PDF, DOCX)
│   ├── normalizers/            # Data normalization logic
│   └── synthesizers/           # Data synthesis logic
└── types/                      # TypeScript type definitions
```

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **AI**: Anthropic Claude API (Sonnet 4.5)
- **Data Storage**: JSON files (can migrate to database later)
- **File Processing**: PDF.js, mammoth (for DOCX)

### Claude API Integration

This project leverages Claude Sonnet 4.5 for:

1. **Source Extraction & Parsing**
   - Extract structured data from unstructured resume text
   - Parse dates, roles, companies, technologies
   - Identify implicit skills and achievements

2. **Normalization & Interpretation**
   - Resolve inconsistencies across sources (e.g., "JS" vs "JavaScript")
   - Deduplicate information from multiple sources
   - Infer missing information with confidence scores
   - Link related pieces of information

3. **Synthesis & Timeline Construction**
   - Identify skill progression patterns
   - Create narrative arcs from disconnected facts
   - Generate concise professional summaries
   - Build coherent timelines from fragmented data

4. **Quality Assurance**
   - Verify interpretations against source material
   - Flag low-confidence interpretations
   - Detect contradictions across sources
   - Suggest areas needing manual review

## Code Standards

### Component Architecture
- **Modular design**: Break down large components into smaller, focused components
- **Single responsibility**: Each component should have one clear purpose
- **Custom hooks**: Extract business logic into reusable hooks in `app/hooks/`
- **Shared types**: TypeScript interfaces in `types/` directory
- **Utility functions**: Pure functions in `lib/utils/`

### TypeScript Best Practices
- **Strict mode enabled**: No implicit any, strict null checks
- **Type definitions**: Define interfaces for all data structures
- **API contracts**: Type all API request/response shapes
- **Discriminated unions**: Use for state machines and variants

### Data Integrity Principles
1. **Never delete source data**: All original text is preserved
2. **Always link interpretations**: Every interpretation references its sources
3. **Track confidence**: Know what's certain vs. inferred
4. **Version everything**: Track changes to interpretations over time
5. **Human-in-the-loop**: Flag uncertain interpretations for manual review

### Comment Policy
- **Minimize comments**: Only include comments that explain non-obvious technical decisions or provide critical context
- **Remove obvious comments**: Do not comment code that is self-explanatory
- **Preserve critical context**: Keep comments that explain "why" rather than "what"
- Examples of acceptable comments:
  - Complex algorithms or business logic explanations
  - Workarounds for specific issues
  - Claude API prompt engineering notes
  - Data integrity safeguards
  - Confidence scoring rationale
- Examples of comments to remove:
  - "Set the value to 5" (obvious)
  - "Loop through the array" (obvious)
  - "Call the API" (obvious)

### File Organization
- **API routes**: One file per endpoint in `app/api/`
- **Components**: Organized by feature in `app/[feature]/components/`
- **Types**: Shared types in `types/`, feature-specific types colocated
- **Libraries**: Shared logic in `lib/`, organized by domain

### Styling Guidelines
- **Tailwind CSS v4**: Use Tailwind utility classes
- **PostCSS configuration**: Custom CSS in `app/globals.css` only when necessary
- **Light mode only**: Single consistent visual experience, warm and human-centered
- **Responsive design**: Mobile-first approach

## Testing & Quality

### Before Committing
- Run type check: `npm run build`
- Run linter: `npm run lint`
- Test API endpoints manually with sample data
- Verify data integrity (all links between layers valid)

### Data Validation
- **Source data**: Validate all source JSON has required fields
- **Interpretations**: Ensure all interpretations link to valid sources
- **Synthesis**: Verify all synthesized data links to valid interpretations
- **Confidence scores**: Range [0.0, 1.0], document thresholds

## Environment Variables

Required in `.env.local`:
```bash
ANTHROPIC_API_KEY=sk-ant-...
```

Optional:
```bash
# Future database connection
DATABASE_URL=...

# Feature flags
ENABLE_MULTI_USER=false
```

## Usage Flow

1. **Upload Sources**: Upload resumes, paste LinkedIn profiles, add article URLs
2. **Parse**: System extracts raw text and creates source records (Layer 1)
3. **Interpret**: Claude analyzes sources and creates normalized interpretations (Layer 2)
4. **Review**: Manually review and adjust interpretations as needed
5. **Synthesize**: System generates condensed insights and timeline (Layer 3)
6. **Export**: Generate biographies, export timeline data

## Key Features to Implement

- [ ] Document upload interface (PDF, DOCX, TXT)
- [ ] Source text extraction and storage
- [ ] Claude API integration for interpretation
- [ ] Interpretation review UI with confidence display
- [ ] Timeline visualization
- [ ] Biography generation (50/150/300 word versions)
- [ ] Conflict resolution UI for contradictory sources
- [ ] Export functionality (PDF, JSON, Markdown)

## Performance Considerations

- **Claude API rate limits**: Implement exponential backoff
- **Large documents**: Process in chunks if needed
- **Caching**: Cache Claude API responses for identical inputs
- **Progressive enhancement**: Show partial results while processing

## Security & Privacy

- **No data sharing**: All data stored locally (JSON files)
- **API key security**: Never commit `.env.local` to git
- **Future encryption**: Plan for data encryption at rest
- **User consent**: Clear messaging about AI processing

## Future Enhancements

- [ ] Database migration (PostgreSQL with source text preserved)
- [ ] Version control for interpretations
- [ ] Conflict resolution UI with side-by-side comparison
- [ ] Export to various resume formats
- [ ] Privacy controls and data encryption
- [ ] Multi-user support for career coaches
- [ ] Integration with LinkedIn, GitHub, portfolio sites
- [ ] Automated source refresh (periodically re-scrape public profiles)

## Philosophy: Truth-Preserving Compression

This isn't about making resumes look better—it's about making them more accurate. By maintaining multiple layers of abstraction with bidirectional links:

- **Condense** without losing nuance (trace back to details when needed)
- **Clarify** without distorting (see exactly what source inspired each interpretation)
- **Synthesize** without fabricating (all insights grounded in real data)

The goal is maximum clarity, zero information loss.
