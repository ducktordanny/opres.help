/**
 * This type provides three options where 'steps' means you only get
 * the steps of the calculation, but no explanations and 'explanations'
 * gives you the steps with instructions and the last one 'result' means
 * you only want the result of the calculation.
 * */
export type CalculationMode = 'steps' | 'explanations' | 'result';

export interface Explanation {
  hu: string;
  en: string;
}

export interface Epsilon {
  /** The result number of the calculation what's called epsilon. */
  value: number;
  /** This should contain the explanation of the calculation if needed. */
  explanation?: Explanation;
}

export interface SelectedCell {
  x: number;
  y: number;
  value?: number;
}
