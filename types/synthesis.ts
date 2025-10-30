import type { SourceReference } from './interpretation';

export interface InterpretationReference {
  interpretationId: string;
  itemId: string;
  itemType: 'skill' | 'role' | 'education' | 'certification';
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'role_start' | 'role_end' | 'education_start' | 'education_end' | 'certification' | 'skill_acquired';
  title: string;
  description?: string;
  references: InterpretationReference[];
  confidence: number;
}

export interface SkillProgression {
  skillId: string;
  skillName: string;
  timeline: {
    date: string;
    proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    evidence: InterpretationReference[];
  }[];
}

export interface CareerNarrative {
  id: string;
  summary: string;
  keyThemes: string[];
  references: InterpretationReference[];
}

export interface Biography {
  id: string;
  wordCount: 50 | 150 | 300;
  text: string;
  generatedAt: string;
  references: InterpretationReference[];
}

export interface Synthesis {
  id: string;
  timeline: TimelineEvent[];
  skillProgressions: SkillProgression[];
  narratives: CareerNarrative[];
  biographies: Biography[];
  createdAt: string;
  updatedAt: string;
  processedBy: 'claude' | 'manual';
}
