import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizzamodel } from './pizzamodel';

describe('Pizzamodel', () => {
  let component: Pizzamodel;
  let fixture: ComponentFixture<Pizzamodel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pizzamodel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pizzamodel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
