import {CalculationMode} from '@opres/shared/types';

export function isCalculationModeValid(mode: CalculationMode): boolean {
  return ['steps', 'explanations', 'result'].includes(mode);
}
