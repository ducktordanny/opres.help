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

import {AllTabModule} from '../+tabs/all-tab/all.tab.module';
import {TabsModule} from '../+tabs/tabs.module';
import {TransportProblemService} from '../transport-problem.service';

import {FirstPhaseResultInputComponent} from './first-phase-result-input.component';

describe('FirstPhaseResultInputComponent', () => {
  let fixture: ComponentFixture<FirstPhaseResultInputComponent>;
  let component: FirstPhaseResultInputComponent;
  let inputTableService: InputTableService;
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
      declarations: [FirstPhaseResultInputComponent],
      imports: [
        AllTabModule,
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

    fixture = TestBed.createComponent(FirstPhaseResultInputComponent);
    component = fixture.componentInstance;
    inputTableService = TestBed.inject(InputTableService);
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(FirstPhaseResultInputComponent));

  it('should check default values', (done) => {
    expect(component.firstStepFormGroup.getRawValue()).toEqual(
      firstStepFormGroupMock,
    );
    expect(component.secondStepFormGroup.getRawValue()).toEqual({});
    expect(component.costs$.getValue()).toEqual(costsMock);
    expect(component.transportations$.getValue()).toEqual(transportationsMock);
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
});
