import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatSelectHarness} from '@angular/material/select/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemModule} from '../transport-problem.module';
import {TransportProblemPageComponent} from '../transport-problem.page';
import {TransportProblemService} from '../transport-problem.service';

describe('TransportProblemPageComponent', () => {
  let fixture: ComponentFixture<TransportProblemPageComponent>;
  let component: TransportProblemPageComponent;
  let loader: HarnessLoader;
  let transportProblemService: TransportProblemService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TransportProblemModule,
        NoopAnimationsModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportProblemPageComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    transportProblemService = TestBed.inject(TransportProblemService);
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(TransportProblemPageComponent));

  it('should check default values', () => {
    expect(component.resultEpsilon$.getValue()).toEqual(null);
    expect(component.selectedMethod$.getValue()).toEqual('north-west');
    expect(component.error.getValue()).toEqual(null);
    expect(component.results.getValue().length).toEqual(1);
    expect(component.results.getValue()[0]).toEqual({
      transportation: [],
      demands: [],
      stocks: [],
    });
  });

  it('should change number of shops', async () => {
    const onShopCountChangeSpy = jest.spyOn(component, 'onShopsCountChange');
    const select = await loader.getHarness(
      MatSelectHarness.with({
        selector: '[data-test-id="number-of-shops-select"]',
      }),
    );
    await select.open();
    const threeShopsOption = await select.getOptions();
    await threeShopsOption[0].click();
    expect(onShopCountChangeSpy).toHaveBeenCalled();
    expect(transportProblemService.shops$.getValue()).toEqual(3);
  });

  it('should change number of storages', async () => {
    const onStorageCountChangeSpy = jest.spyOn(
      component,
      'onStoragesCountChange',
    );
    const select = await loader.getHarness(
      MatSelectHarness.with({
        selector: '[data-test-id="number-of-storages-select"]',
      }),
    );
    await select.open();
    const threeStoragesOption = await select.getOptions();
    await threeStoragesOption[0].click();
    expect(onStorageCountChangeSpy).toHaveBeenCalled();
    expect(transportProblemService.storages$.getValue()).toEqual(3);
  });

  it('should check method options', async () => {
    const select = await loader.getHarness(
      MatSelectHarness.with({selector: '[data-test-id="method-select"]'}),
    );
    await select.open();
    const methodOptions = await select.getOptions();
    expect(await methodOptions[1].isDisabled()).toBeTruthy();
    expect(await methodOptions[2].isDisabled()).toBeTruthy();
  });

  it('should click to calculate result', async () => {
    const calculateButton = await loader.getHarness(
      MatButtonHarness.with({selector: '[data-test-id="calculate-button"]'}),
    );
    await calculateButton.click();
    expect(component.results.getValue()).toHaveLength(7);
    expect(component.resultEpsilon$.getValue()).toEqual(458);
  });

  it('should reset states', () => {
    component.reset();
    expect(component.error.getValue()).toEqual(null);
    expect(component.results.getValue()).toHaveLength(0);
    expect(component.resultEpsilon$.getValue()).toEqual(null);
  });

  it('should reset onDestroy', () => {
    const transportServiceResetSpy = jest.spyOn(
      transportProblemService,
      'reset',
    );
    component.ngOnDestroy();
    expect(transportServiceResetSpy).toHaveBeenCalled();
  });
});
