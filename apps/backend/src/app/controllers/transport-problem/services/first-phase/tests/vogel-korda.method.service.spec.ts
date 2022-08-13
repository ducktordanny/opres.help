import {
  tpDataFirstMock,
  tpDataSecondMock,
  vogelKordaFirstResultMock,
  vogelKordaSecondResultMock,
} from '@opres/shared/data/mocks';

import {VogelKordaMethodService} from '../vogel-korda.method.service';

describe('NorthWestMethodService', () => {
  let service: VogelKordaMethodService;

  beforeEach(() => {
    service = new VogelKordaMethodService();
  });

  it('should be created', () =>
    expect(service).toBeInstanceOf(VogelKordaMethodService));

  it('should calculate a transport problem part 1', () => {
    const result = service.calculate(tpDataFirstMock, 'explanations');
    expect(result).toEqual(vogelKordaFirstResultMock);
  });

  it('should calculate a transport problem part 2', () => {
    const result = service.calculate(tpDataSecondMock, 'explanations');
    expect(result).toEqual(vogelKordaSecondResultMock);
  });
});
