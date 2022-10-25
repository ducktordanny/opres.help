import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
  resultTableMock,
  secondPhaseFirstResultMock,
} from '@opres/shared/data/mocks';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';

import {Language} from '../../../../components/layout/language-switcher/language-switcher.service';
import {LoadingHandlerService} from '../../../../services/loading-handler.service';
import {
  SecondPhaseResult,
  transportProblemCacheBuster$,
  TransportProblemService,
} from '../../transport-problem.service';

import {SecondPhaseTabComponent} from './second-phase.tab.component';
import {SecondPhaseTabModule} from './second-phase.tab.module';

const secondPhaseResultMock: SecondPhaseResult = {
  steps: secondPhaseFirstResultMock,
  epsilon: {
    value: 216,
  },
};

describe('SecondPhaseTabComponent', () => {
  let fixture: ComponentFixture<SecondPhaseTabComponent>;
  let component: SecondPhaseTabComponent;
  let transportProblemService: TransportProblemService;
  let loadingHandler: LoadingHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondPhaseTabComponent],
      imports: [
        SecondPhaseTabModule,
        HttpClientModule,
        TranslateModule.forRoot({defaultLanguage: 'en'}),
      ],
    });

    fixture = TestBed.createComponent(SecondPhaseTabComponent);
    component = fixture.componentInstance;
    transportProblemService = TestBed.inject(TransportProblemService);
    loadingHandler = TestBed.inject(LoadingHandlerService);
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(SecondPhaseTabComponent));

  it('should check default values', (done) => {
    expect(component.result$.getValue()).toEqual(null);
    component.currentLanguage$.subscribe((value: Language) => {
      expect(value).toEqual('en');
      done();
    });
  });

  it('should calculate second phase', () => {
    const loadingStartSpy = jest.spyOn(loadingHandler, 'start');
    const loadingStopSpy = jest.spyOn(loadingHandler, 'stop');
    const getSecondPhaseResultSpy = jest
      .spyOn(transportProblemService, 'getSecondPhaseResult')
      .mockReturnValue(of(secondPhaseResultMock));
    component.onCalculate(resultTableMock);
    expect(loadingStartSpy).toHaveBeenCalled();
    expect(getSecondPhaseResultSpy).toHaveBeenCalledWith(resultTableMock);
    expect(component.result$.getValue()).toEqual(secondPhaseResultMock);
    expect(loadingStopSpy).toHaveBeenCalled();
  });

  it('should destroy', () => {
    const loadingStopSpy = jest.spyOn(loadingHandler, 'stop');
    const transportProblemCacheBusterSpy = jest.spyOn(
      transportProblemCacheBuster$,
      'next',
    );
    component.ngOnDestroy();
    expect(loadingStopSpy).toHaveBeenCalled();
    expect(transportProblemCacheBusterSpy).toHaveBeenCalled();
  });
});
