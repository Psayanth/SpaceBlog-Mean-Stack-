import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDComponent } from './access-d.component';

describe('AccessDComponent', () => {
  let component: AccessDComponent;
  let fixture: ComponentFixture<AccessDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
