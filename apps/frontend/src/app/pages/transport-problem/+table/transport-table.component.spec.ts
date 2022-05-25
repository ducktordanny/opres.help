import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule} from '@ngx-translate/core';

import {InputTableService} from '../../../components/input-table/input-table.service';
import {TransportProblemModule} from '../transport-problem.module';
import {TransportProblemService} from '../transport-problem.service';

import {TransportTableComponent} from './transport-table.component';

describe('TransportTableComponent', () => {
  let fixture: ComponentFixture<TransportTableComponent>;
  let component: TransportTableComponent;
  let loader: HarnessLoader;
  let transportProblemService: TransportProblemService;
  let inputTableService: InputTableService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TransportProblemModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportTableComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    transportProblemService = TestBed.inject(TransportProblemService);
    inputTableService = TestBed.inject(InputTableService);
    fixture.detectChanges();
  });

  it('should create component', () =>
    expect(component).toBeInstanceOf(TransportTableComponent));

  it('should check default values', () => {
    expect(component.storages$.getValue()).toEqual(4);
    expect(component.shops$.getValue()).toEqual(4);
  });

  it('should clear the tables with the button', async () => {
    const inputTableServiceClearSpy = jest.spyOn(inputTableService, 'clear');
    const transportProblemServiceClearSpy = jest.spyOn(
      transportProblemService,
      'clear',
    );
    const tableClearEmitSpy = jest.spyOn(component.tableClear, 'emit');
    const clearButton = await loader.getHarness(
      MatButtonHarness.with({selector: '[data-test-id="table-clear-button"]'}),
    );
    await clearButton.click();
    expect(inputTableServiceClearSpy).toHaveBeenCalled();
    expect(inputTableServiceClearSpy).toHaveBeenCalledWith([
      'costs',
      'storageStocks',
      'shopDemands',
    ]);
    expect(transportProblemServiceClearSpy).toHaveBeenCalled();
    expect(tableClearEmitSpy).toHaveBeenCalled();
  });
});
