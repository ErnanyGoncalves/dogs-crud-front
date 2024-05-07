import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogInfoModalComponent } from './dog-info-modal.component';

describe('DogInfoModalComponent', () => {
  let component: DogInfoModalComponent;
  let fixture: ComponentFixture<DogInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogInfoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
