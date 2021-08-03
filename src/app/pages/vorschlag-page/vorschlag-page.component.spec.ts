import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorschlagPageComponent } from './vorschlag-page.component';

describe('VorschlagPageComponent', () => {
  let component: VorschlagPageComponent;
  let fixture: ComponentFixture<VorschlagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VorschlagPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VorschlagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
