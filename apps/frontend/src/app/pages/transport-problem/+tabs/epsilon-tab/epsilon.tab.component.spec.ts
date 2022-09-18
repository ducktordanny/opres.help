import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatStepperModule} from '@angular/material/stepper';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  InputTableModule,
  InputTableService,
  TableModule,
} from '@opres/ui/tables';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';

import {LoadingHandlerService} from '../../../../services/loading-handler.service';
import {EpsilonResultModule} from '../../+results/epsilon-result/epsilon-result.module';
import {TransportProblemService} from '../../transport-problem.service';
import {AllTabModule} from '../all-tab/all.tab.module';
import {TabsModule} from '../tabs.module';

import {EpsilonTabComponent} from './epsilon.tab.component';

describe('EpsilonTabComponent', () => {
  let fixture: ComponentFixture<EpsilonTabComponent>;
  let component: EpsilonTabComponent;
  let transportProblemService: TransportProblemService;
  let inputTableService: InputTableService;
  let loadingHandler: LoadingHandlerService;
  const firstStepFormGroupMock = {
    shops: 4,
    storages: 4,
  };
  const costsMock = [
    {'0': 8, '1': 7, '2': 3, '3': 2},
    {'0': 1, '1': 4, '2': 2, '3': 5},
    {'0': 2, '1': 3, '2': 4, '3': 7},
    {'0': 1, '1': 1, '2': 4, '3': 4},
  ];
  const transportationsMock = [
    {'0': null, '1': null, '2': null, '3': 15},
    {'0': 8, '1': null, '2': 35, '3': null},
    {'0': 10, '1': 13, '2': null, '3': 5},
    {'0': null, '1': 19, '2': null, '3': null},
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpsilonTabComponent],
      imports: [
        AllTabModule,
        EpsilonResultModule,
        HttpClientModule,
        InputTableModule,
        MatStepperModule,
        NoopAnimationsModule,
        TableModule,
        TabsModule,
        TranslateModule.forRoot(),
      ],
      providers: [TransportProblemService],
    });

    fixture = TestBed.createComponent(EpsilonTabComponent);
    component = fixture.componentInstance;
    transportProblemService = TestBed.inject(TransportProblemService);
    inputTableService = TestBed.inject(InputTableService);
    loadingHandler = TestBed.inject(LoadingHandlerService);
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(EpsilonTabComponent));

  it('should check default values', (done) => {
    expect(component.firstStepFormGroup.getRawValue()).toEqual(
      firstStepFormGroupMock,
    );
    expect(component.secondStepFormGroup.getRawValue()).toEqual({});
    expect(component.costs$.getValue()).toEqual(costsMock);
    expect(component.transportations$.getValue()).toEqual(transportationsMock);
    expect(component.result$.getValue()).toEqual(null);
    component.isLoading$.subscribe((loading: boolean) =>
      expect(loading).toEqual(false),
    );
    done();
  });

  it('should change values of tables', () => {
    component.onTransportationsChange([]);
    expect(component.transportations$.getValue()).toEqual([]);
    component.onCostsChange([]);
    expect(component.costs$.getValue()).toEqual([]);
  });

  it('should clear tables', () => {
    const tableClearSpy = jest.spyOn(inputTableService, 'clear');
    component.onTransportationsClear();
    expect(tableClearSpy).toHaveBeenCalledWith('transportations');
    component.onCostsClear();
    expect(tableClearSpy).toHaveBeenCalledWith('costs');
  });

  it('should calculate epsilon', (done) => {
    const startLoadingSpy = jest.spyOn(loadingHandler, 'start');
    const getEpsilonSpy = jest
      .spyOn(transportProblemService, 'getEpsilonResult')
      .mockReturnValue(of({value: 221}));
    const stopLoadingSpy = jest.spyOn(loadingHandler, 'stop');
    component.onCalculate();
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
