import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {resultTableMock} from '@opres/shared/data/mocks';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';

import {LoadingHandlerService} from '../../../../services/loading-handler.service';
import {FirstPhaseResultInputModule} from '../../+first-phase-result-input/first-phase-result-input.module';
import {EpsilonResultModule} from '../../+results/epsilon-result/epsilon-result.module';
import {TransportProblemService} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {EpsilonTabComponent} from './epsilon.tab.component';

describe('EpsilonTabComponent', () => {
  let fixture: ComponentFixture<EpsilonTabComponent>;
  let component: EpsilonTabComponent;
  let transportProblemService: TransportProblemService;
  let loadingHandler: LoadingHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpsilonTabComponent],
      imports: [
        EpsilonResultModule,
        FirstPhaseResultInputModule,
        HttpClientModule,
        TabsModule,
        TranslateModule.forRoot(),
      ],
      providers: [TransportProblemService],
    });

    fixture = TestBed.createComponent(EpsilonTabComponent);
    component = fixture.componentInstance;
    transportProblemService = TestBed.inject(TransportProblemService);
    loadingHandler = TestBed.inject(LoadingHandlerService);
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(EpsilonTabComponent));

  it('should calculate epsilon', (done) => {
    const startLoadingSpy = jest.spyOn(loadingHandler, 'start');
    const getEpsilonSpy = jest
      .spyOn(transportProblemService, 'getEpsilonResult')
      .mockReturnValue(of({value: 221}));
    const stopLoadingSpy = jest.spyOn(loadingHandler, 'stop');
    component.onCalculate(resultTableMock);
    expect(startLoadingSpy).toHaveBeenCalled();
    expect(getEpsilonSpy).toHaveBeenCalled();
    expect(component.result$).not.toEqual(null);
    component.result$?.subscribe((epsilon) =>
      expect(epsilon).toEqual({value: 221}),
    );
    expect(stopLoadingSpy).toHaveBeenCalled();
    done();
  });
});
