import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurowceComponent } from './surowce.component';

describe('SurowceComponent', () => {
  let component: SurowceComponent;
  let fixture: ComponentFixture<SurowceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurowceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurowceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
