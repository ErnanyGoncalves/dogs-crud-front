import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCardComponent } from './dog-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DogCardComponent', () => {
  let component: DogCardComponent;
  let fixture: ComponentFixture<DogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogCardComponent,RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
