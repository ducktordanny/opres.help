export type CalculationMode = 'steps' | 'explanations' | 'result';

export interface Epsilon {
  epsilon: number;
  explanation?: string;
}
