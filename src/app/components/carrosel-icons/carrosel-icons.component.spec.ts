import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselIconsComponent } from './carrosel-icons.component';

describe('CarroselIconsComponent', () => {
  let component: CarroselIconsComponent;
  let fixture: ComponentFixture<CarroselIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
