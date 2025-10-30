# Resume Truther

A multi-layered truth preservation system for personal career data that maintains accuracy while enabling progressive synthesis and condensation of information.

## Philosophy

The fundamental challenge: How do we condense and clarify information without losing accuracy? Resume Truther approaches this through a layered data architecture where each level of abstraction maintains bidirectional links to its sources, creating an auditable chain of interpretation.

## Architecture Overview

### Three-Layer Data Model

#### Layer 1: Raw Source Layer (`/data/sources/`)
- **Purpose**: Preserve all original data without loss
- **Format**: Original text extracted from documents, websites, articles
- **Structure**:
  ```json
  {
    "sourceId": "uuid",
    "sourceType": "resume|linkedin|article|website",
    "sourceUrl": "https://...",
    "captureDate": "2025-10-30",
    "rawText": "exact text from source",
    "metadata": {
      "documentTitle": "...",
      "author": "...",
      "publishDate": "..."
    }
  }
  ```

#### Layer 2: Interpreted/Normalized Layer (`/data/interpreted/`)
- **Purpose**: Structured understanding of source content
- **Format**: Normalized JSON with references to sources
- **Structure**:
  ```json
  {
    "interpretedId": "uuid",
    "category": "experience|education|skill|achievement",
    "sourceReferences": ["sourceId1", "sourceId2"],
    "sourceExcerpts": [
      {
        "sourceId": "...",
        "relevantText": "specific excerpt that led to this interpretation"
      }
    ],
    "normalizedData": {
      "title": "Software Engineer",
      "organization": "Company Name",
      "dateRange": {"start": "2020-01", "end": "2023-05"},
      "description": "Interpreted responsibilities and achievements",
      "technologies": ["React", "Node.js", "PostgreSQL"]
    },
    "confidence": 0.95,
    "interpretationNotes": "Why this interpretation was made"
  }
  ```

#### Layer 3: Synthesized Layer (`/data/synthesized/`)
- **Purpose**: Condensed, concise statements inferred from interpreted data
- **Format**: High-level insights and timeline data
- **Structure**:
  ```json
  {
    "synthesizedId": "uuid",
    "type": "skill-progression|career-arc|expertise-area",
    "interpretedReferences": ["interpretedId1", "interpretedId2"],
    "synthesis": "5+ years of full-stack JavaScript development with focus on scalable web applications",
    "timelineEvents": [
      {
        "date": "2020-01",
        "event": "Began career in full-stack development",
        "significance": "Entry into professional software engineering"
      }
    ],
    "keyInsights": [
      "Progressive specialization in React ecosystem",
      "Consistent focus on user-facing applications"
    ]
  }
  ```

## Using Claude Anthropic LLMs

Yes! This project will leverage Claude Sonnet (and potentially other Claude models) for:

### 1. Source Extraction & Parsing
- Extract structured data from unstructured resume text
- Parse dates, roles, companies, technologies
- Identify implicit skills and achievements

### 2. Normalization & Interpretation
- Resolve inconsistencies across sources (e.g., "JS" vs "JavaScript")
- Deduplicate information from multiple sources
- Infer missing information with confidence scores
- Link related pieces of information

### 3. Synthesis & Timeline Construction
- Identify skill progression patterns
- Create narrative arcs from disconnected facts
- Generate concise professional summaries
- Build coherent timelines from fragmented data

### 4. Quality Assurance
- Verify interpretations against source material
- Flag low-confidence interpretations
- Detect contradictions across sources
- Suggest areas needing manual review

## Key Features

### Bidirectional Traceability
Every synthesized statement can be traced back through interpretations to original source text. Every piece of source text can be traced forward to see how it was interpreted and synthesized.

### Confidence Scoring
Each interpretation includes a confidence score so you know which data points are solid vs. inferred.

### Multi-Source Reconciliation
When multiple sources provide conflicting information, the system tracks all versions and attempts reconciliation with transparency about conflicts.

### Timeline View
Visual representation of skill acquisition, role progression, and career development over time.

### Biography Generation
Automated generation of professional biographies at various lengths (50/150/300 words) from synthesized data.

## Project Structure

```
resume-truther/
├── app/                        # Next.js app directory
│   ├── api/                    # API routes
│   │   ├── parse/              # Source parsing endpoints
│   │   ├── interpret/          # Interpretation endpoints
│   │   ├── synthesize/         # Synthesis endpoints
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
│   ├── parsers/                # Document parsers
│   ├── normalizers/            # Data normalization
│   └── synthesizers/           # Data synthesis
└── types/                      # TypeScript type definitions
```

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API (Sonnet 4.5)
- **Data Storage**: JSON files (can migrate to database later)
- **File Processing**: PDF.js, mammoth (for DOCX)

## Getting Started

### Prerequisites

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Usage Flow

1. **Upload Sources**: Upload resumes, paste LinkedIn profiles, add article URLs
2. **Parse**: System extracts raw text and creates source records
3. **Interpret**: Claude analyzes sources and creates normalized interpretations
4. **Review**: Manually review and adjust interpretations as needed
5. **Synthesize**: System generates condensed insights and timeline
6. **Export**: Generate biographies, export timeline data

## Data Integrity Principles

1. **Never delete source data**: All original text is preserved
2. **Always link interpretations**: Every interpretation references its sources
3. **Track confidence**: Know what's certain vs. inferred
4. **Version everything**: Track changes to interpretations over time
5. **Human-in-the-loop**: Flag uncertain interpretations for manual review

## Future Enhancements

- [ ] Database migration (PostgreSQL with source text preserved)
- [ ] Conflict resolution UI for contradictory sources
- [ ] Version control for interpretations
- [ ] Export to various resume formats
- [ ] Privacy controls and data encryption
- [ ] Multi-user support for career coaches
- [ ] Integration with LinkedIn, GitHub, portfolio sites
- [ ] Automated source refresh (periodically re-scrape public profiles)

## Philosophy: Accuracy Through Layers

This isn't about making your resume look better—it's about making it more accurate. By maintaining multiple layers of abstraction with bidirectional links, we can:

- **Condense** without losing nuance (trace back to details when needed)
- **Clarify** without distorting (see exactly what source inspired each interpretation)
- **Synthesize** without fabricating (all insights grounded in real data)

The goal is truth-preserving compression: maximum clarity, zero information loss.

## License

MIT

## Contributing

This is a personal project, but suggestions and contributions are welcome!
