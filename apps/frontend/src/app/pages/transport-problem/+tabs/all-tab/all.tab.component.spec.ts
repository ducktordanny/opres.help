import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatInputHarness} from '@angular/material/input/testing';
import {MatSelectHarness} from '@angular/material/select/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';

import {
  FullCalculationResult,
  TransportProblemService,
} from '../../transport-problem.service';
import {TabsModule} from '../tabs.module';

import {AllTabModule} from './all.tab.module';
import {AllTabComponent} from './all-tab.component';

describe('AllTabComponent', () => {
  const formGroupMock = {
    shops: 4,
    storages: 4,
    method: 'north-west',
  };
  let fixture: ComponentFixture<AllTabComponent>;
  let component: AllTabComponent;
  let loader: HarnessLoader;
  let transportProblemService: TransportProblemService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AllTabModule,
        HttpClientModule,
        NoopAnimationsModule,
        TabsModule,
        TranslateModule.forRoot(),
      ],
      providers: [TransportProblemService],
    }).compileComponents();

    fixture = TestBed.createComponent(AllTabComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    transportProblemService = TestBed.inject(TransportProblemService);
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(AllTabComponent));

  it('should check default values', () => {
    expect(component.formGroup.getRawValue()).toEqual(formGroupMock);
    expect(component.results$.getValue()).toEqual(null);
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
    expect(await methodOptions[2].isDisabled()).toEqual(false);
  });

  it('should click to calculate result', async () => {
    const firstPhaseSpy = jest
      .spyOn(transportProblemService, 'getFullCalculationResult')
      .mockReturnValue(of({} as FullCalculationResult));
    const button = await loader.getHarness(
      MatButtonHarness.with({selector: '[data-test-id="calculate-button"]'}),
    );
    await button.click();
    expect(component.results$.getValue()).not.toEqual(null);
    expect(firstPhaseSpy).toHaveBeenCalled();
  });

  it('should reset states', () => {
    component.formGroup.setErrors({apple: 'I am an error'});
    component.results$.next({
      firstPhase: {steps: [], epsilon: {value: 123}},
      secondPhase: {steps: [], epsilon: {value: 123}},
    });
    component.reset();
    expect(component.formGroup.errors).toEqual(null);
    expect(component.results$.getValue()).toEqual(null);
  });
});
