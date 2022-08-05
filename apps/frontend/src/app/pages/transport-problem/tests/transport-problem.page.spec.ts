import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {TransportProblemModule} from '../transport-problem.module';
import {Tab, TransportProblemPageComponent} from '../transport-problem.page';

describe('TransportProblemPageComponent', () => {
  const tabsMock: Array<Tab> = [
    {label: 'TRANSPORTATION_PROBLEM.TABS.ALL', link: 'all'},
    {label: 'TRANSPORTATION_PROBLEM.TABS.SECOND_PHASE', link: 'second-phase'},
    {label: 'TRANSPORTATION_PROBLEM.TABS.EPSILON', link: 'epsilon'},
  ];
  let fixture: ComponentFixture<TransportProblemPageComponent>;
  let component: TransportProblemPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransportProblemModule, RouterTestingModule],
    });

    fixture = TestBed.createComponent(TransportProblemPageComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () =>
    expect(component).toBeInstanceOf(TransportProblemPageComponent));

  it('should check tab elements', () =>
    expect(component.tabs).toEqual(tabsMock));
});
