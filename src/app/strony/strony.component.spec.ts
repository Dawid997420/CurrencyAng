import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronyComponent } from './strony.component';

describe('StronyComponent', () => {
  let component: StronyComponent;
  let fixture: ComponentFixture<StronyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StronyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
