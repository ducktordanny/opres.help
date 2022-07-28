import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {InputTableService} from '@opres/generatable-tables';
import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemModule} from '../transport-problem.module';

import {TransportTableComponent} from './transport-table.component';

describe('TransportTableComponent', () => {
  let fixture: ComponentFixture<TransportTableComponent>;
  let component: TransportTableComponent;
  let loader: HarnessLoader;
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
    inputTableService = TestBed.inject(InputTableService);
    fixture.detectChanges();
  });

  it('should create component', () =>
    expect(component).toBeInstanceOf(TransportTableComponent));

  it('should check default values', () => {
    expect(component.storagesCount).toEqual(4);
    expect(component.shopsCount).toEqual(4);
  });

  it('should clear the tables with the button', async () => {
    const inputTableServiceClearSpy = jest.spyOn(inputTableService, 'clear');
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
    expect(tableClearEmitSpy).toHaveBeenCalled();
  });
});
