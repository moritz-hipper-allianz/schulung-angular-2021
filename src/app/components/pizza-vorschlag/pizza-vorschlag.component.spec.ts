import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaVorschlagComponent } from './pizza-vorschlag.component';

describe('PizzaVorschlagComponent', () => {
  let component: PizzaVorschlagComponent;
  let fixture: ComponentFixture<PizzaVorschlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaVorschlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaVorschlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
