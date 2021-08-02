import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaVorschauComponent } from './pizza-vorschau.component';

describe('PizzaVorschauComponent', () => {
  let component: PizzaVorschauComponent;
  let fixture: ComponentFixture<PizzaVorschauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaVorschauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaVorschauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
