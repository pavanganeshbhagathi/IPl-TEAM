import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectListComponent } from './contect-list.component';

describe('ContectListComponent', () => {
  let component: ContectListComponent;
  let fixture: ComponentFixture<ContectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
