import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalutyComponent } from './waluty.component';

describe('WalutyComponent', () => {
  let component: WalutyComponent;
  let fixture: ComponentFixture<WalutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
