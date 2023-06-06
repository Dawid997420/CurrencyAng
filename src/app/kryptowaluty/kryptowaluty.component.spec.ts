import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KryptowalutyComponent } from './kryptowaluty.component';

describe('KryptowalutyComponent', () => {
  let component: KryptowalutyComponent;
  let fixture: ComponentFixture<KryptowalutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KryptowalutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KryptowalutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
