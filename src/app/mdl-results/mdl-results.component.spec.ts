import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlResultsComponent } from './mdl-results.component';

describe('MdlResultsComponent', () => {
  let component: MdlResultsComponent;
  let fixture: ComponentFixture<MdlResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
