import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignindosComponent } from './signindos.component';

describe('SignindosComponent', () => {
  let component: SignindosComponent;
  let fixture: ComponentFixture<SignindosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignindosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignindosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
