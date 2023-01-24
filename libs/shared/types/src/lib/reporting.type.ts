export enum ReportType {
  Bug = 'bug',
  Improvement = 'improvement',
  Idea = 'idea',
  Texting = 'texting',
}

export interface ReportingBody {
  title: string;
  email: string;
  type: ReportType;
  description: string;
  version: string;
  date: Date;
}
