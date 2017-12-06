import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlResultRowComponent } from './mdl-result-row.component';

describe('MdlResultRowComponent', () => {
  let component: MdlResultRowComponent;
  let fixture: ComponentFixture<MdlResultRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlResultRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlResultRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
