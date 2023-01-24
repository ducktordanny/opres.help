import {
  secondPhaseFirstResultMock,
  secondPhaseSecondResultMock,
  vogelKordaFirstResultMock,
  vogelKordaSecondResultMock,
} from '@opres/shared/data/mocks';
import {last} from 'lodash';

import {SecondPhaseService} from './second-phase.service';

describe('SecondPhaseService', () => {
  let service: SecondPhaseService;

  beforeEach(() => {
    service = new SecondPhaseService();
  });

  it('should be created', () => expect(service).toBeInstanceOf(SecondPhaseService));

  it("should calculate a transport problem's second phase part 1", () => {
    const firstPhaseResult = last(vogelKordaFirstResultMock)?.transportation;
    const result = service.calculate(firstPhaseResult, 'explanations');
    expect(result).toEqual(secondPhaseFirstResultMock);
  });

  it("should calculate a transport problem's second phase part 2", () => {
    const firstPhaseResult = last(vogelKordaSecondResultMock)?.transportation;
    const result = service.calculate(firstPhaseResult, 'explanations');
    expect(result).toEqual(secondPhaseSecondResultMock);
  });
});
