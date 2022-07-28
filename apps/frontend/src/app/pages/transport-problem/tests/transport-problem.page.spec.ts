import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatInputHarness} from '@angular/material/input/testing';
import {MatSelectHarness} from '@angular/material/select/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule} from '@ngx-translate/core';

import {TransportProblemModule} from '../transport-problem.module';
import {TransportProblemPageComponent} from '../transport-problem.page';
import {TransportProblemService} from '../transport-problem.service';

describe('TransportProblemPageComponent', () => {
  const formGroupMock = {
    shops: 4,
    storages: 4,
    method: 'north-west',
  };
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
    expect(component.formGroup.getRawValue()).toEqual(formGroupMock);
    expect(component.results$).toEqual(null);
    expect(component.resultEpsilon$.getValue()).toEqual(null);
  });

  it('should change number of shops', async () => {
    const input = await loader.getHarness(
      MatInputHarness.with({
        selector: '[data-test-id="number-of-shops-input"]',
      }),
    );
    await input.setValue('3');
    expect(component.formGroup.get('shops')?.value).toEqual(3);
  });

  it('should change number of storages', async () => {
    const input = await loader.getHarness(
      MatInputHarness.with({
        selector: '[data-test-id="number-of-storages-input"]',
      }),
    );
    await input.setValue('3');
    expect(component.formGroup.get('storages')?.value).toEqual(3);
  });

  it('should check method options', async () => {
    const select = await loader.getHarness(
      MatSelectHarness.with({selector: '[data-test-id="method-select"]'}),
    );
    await select.open();
    const methodOptions = await select.getOptions();
    expect(await methodOptions[0].isDisabled()).toEqual(false);
    expect(await methodOptions[1].isDisabled()).toEqual(false);
    expect(await methodOptions[2].isDisabled()).toEqual(true);
  });

  it('should click to calculate result', async () => {
    const firstPhaseSpy = jest.spyOn(
      transportProblemService,
      'calculateFirstPhase',
    );
    const calculateButton = await loader.getHarness(
      MatButtonHarness.with({selector: '[data-test-id="calculate-button"]'}),
    );
    await calculateButton.click();
    expect(firstPhaseSpy).toHaveBeenCalled();
    expect(component.results$).not.toEqual(null);
    expect(component.resultEpsilon$.getValue()).toEqual(458);
  });

  it('should reset states', () => {
    component.reset();
    expect(component.formGroup.errors).toEqual(null);
    expect(component.results$).toEqual(null);
    expect(component.resultEpsilon$.getValue()).toEqual(null);
  });
});
