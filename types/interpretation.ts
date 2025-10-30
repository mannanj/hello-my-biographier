export interface SourceReference {
  sourceId: string;
  excerpt: string;
  location?: string;
}

export interface ConfidenceScore {
  value: number;
  reasoning?: string;
}

export interface InterpretedSkill {
  id: string;
  name: string;
  normalizedName: string;
  category?: string;
  proficiencyLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  sources: SourceReference[];
  confidence: ConfidenceScore;
  firstMentioned?: string;
  lastMentioned?: string;
}

export interface InterpretedRole {
  id: string;
  title: string;
  normalizedTitle: string;
  company: string;
  normalizedCompany: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  description?: string;
  achievements: string[];
  skills: string[];
  sources: SourceReference[];
  confidence: ConfidenceScore;
}

export interface InterpretedEducation {
  id: string;
  institution: string;
  normalizedInstitution: string;
  degree?: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  sources: SourceReference[];
  confidence: ConfidenceScore;
}

export interface InterpretedCertification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  sources: SourceReference[];
  confidence: ConfidenceScore;
}

export interface Interpretation {
  id: string;
  skills: InterpretedSkill[];
  roles: InterpretedRole[];
  education: InterpretedEducation[];
  certifications: InterpretedCertification[];
  createdAt: string;
  updatedAt: string;
  processedBy: 'claude' | 'manual';
  reviewStatus: 'pending' | 'reviewed' | 'approved';
  notes?: string;
}
