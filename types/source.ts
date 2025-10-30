export type SourceType = 'resume' | 'linkedin' | 'article' | 'website' | 'document';

export interface Source {
  id: string;
  type: SourceType;
  uploadedAt: string;
  originalFilename?: string;
  url?: string;
  rawText: string;
  metadata: {
    fileSize?: number;
    mimeType?: string;
    pageCount?: number;
    [key: string]: unknown;
  };
}

export interface SourceDocument {
  source: Source;
  createdAt: string;
  updatedAt: string;
}
