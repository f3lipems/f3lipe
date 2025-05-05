import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingStarsComponent } from './shooting-stars.component';

describe('ShootingStarsComponent', () => {
  let component: ShootingStarsComponent;
  let fixture: ComponentFixture<ShootingStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShootingStarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShootingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
