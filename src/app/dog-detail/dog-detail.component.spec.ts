import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDetailComponent } from './dog-detail.component';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Dog } from '../dog.model';
import { ListDogsComponent } from '../list-dogs/list-dogs.component';
import { Location } from '@angular/common';
const routes: Routes = [
  { path: 'dogs', component: ListDogsComponent }
];
describe('DogDetailComponent', () => {
  let component: DogDetailComponent;
  let fixture: ComponentFixture<DogDetailComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [DogDetailComponent,RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
    
    const mockDogInfo :Dog = {
      photo: 'path/to/photo.jpg',
      name: 'Buddy',
      gender: 'male',
      breed: 'Golden Retriever',
      age: 5,
      height: 60,
      weight: 30,
      about: 'A friendly dog',
      id: 1
    };

    fixture = TestBed.createComponent(DogDetailComponent);
    component = fixture.componentInstance;
    component.dogInfo = mockDogInfo;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render dog details correctly', () => {
    
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('.img-container img') as HTMLImageElement;
    expect(img.src).toContain('path/to/photo.jpg');
    expect(img.alt).toContain('Buddy');
    expect(compiled.querySelector('h1').textContent).toContain('Buddy');
    expect(compiled.querySelector('h1').classList).toContain('male');
    expect(compiled.querySelector('.breed').textContent).toContain('Golden Retriever');
    expect(compiled.querySelector('.body-data p:nth-child(1)').textContent).toContain('5');
    expect(compiled.querySelector('.body-data p:nth-child(2)').textContent).toContain('60');
    expect(compiled.querySelector('.body-data p:nth-child(3)').textContent).toContain('30');
    expect(compiled.querySelector('.about p').textContent).toContain('A friendly dog');
  });

  it('should apply correct gender class', () => {
    
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nameElement = compiled.querySelector('h1');
    expect(nameElement.classList).toContain('male');
    expect(nameElement.classList).not.toContain('female');

    component.dogInfo.gender = 'female';
    fixture.detectChanges();

    expect(nameElement.classList).toContain('female');
    expect(nameElement.classList).not.toContain('male');
  });

  it('should call goToEditForm on edit button click', () => {
    spyOn(component, 'goToEditForm');

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button.edit') as HTMLButtonElement;
    button.click();

    expect(component.goToEditForm).toHaveBeenCalled();
  });

  it('should call deleteDog on delete button click', () => {
    spyOn(component, 'deleteDog');

    
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button.delete') as HTMLButtonElement;
    button.click();

    expect(component.deleteDog).toHaveBeenCalledWith(1);
  });

  it('should navigate to /dogs when the button is clicked', async () => {
    const button = fixture.nativeElement.querySelector('.cancel');

    button.click();

    await fixture.whenStable();
  expect(location.path()).toBe('/dogs');
});


});
