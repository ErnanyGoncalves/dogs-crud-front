import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDetailComponent } from './dog-detail.component';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Dog } from '../dog.model';
import { ListDogsComponent } from '../list-dogs/list-dogs.component';
import { DogService } from '../dog.service';
import { AgePipe } from './age.pipe';
import { HeightPipe } from './height.pipe';
import { WeightPipe } from './weight.pipe';
import { of, throwError } from 'rxjs';
const routes: Routes = [{ path: 'dogs', component: ListDogsComponent }];
describe('DogDetailComponent', () => {
  let component: DogDetailComponent;
  let fixture: ComponentFixture<DogDetailComponent>;
  let dogService: jasmine.SpyObj<DogService>;
  let router: Router;
  let expectedDog: Dog;
  

  beforeEach(async () => {
    const dogServiceSpy = jasmine.createSpyObj('DogService', [
      'getDog',
      'deleteDog',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DogDetailComponent,
        AgePipe,
        HeightPipe,
        WeightPipe,
      ],
      declarations: [],
      providers: [
        { provide: DogService, useValue: dogServiceSpy },
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DogDetailComponent);
    component = fixture.componentInstance;
    dogService = TestBed.inject(DogService) as jasmine.SpyObj<DogService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    expectedDog = new Dog(
      1,
      'Buddy',
      3,
      'male',
      'Labrador',
      60,
      30,
      'path/to/photo.jpg',
      'Friendly dog'
    );
    dogService.getDog.and.returnValue(of(expectedDog));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch dog on init', () => {
    
    dogService.getDog.and.returnValue(of(expectedDog));

    fixture.detectChanges();

    expect(component.isLoading).toBeFalse();
    expect(component.dog).toEqual(expectedDog);

    
  });

  it('should navigate to dogs on fetch error', () => {
    dogService.getDog.and.returnValue(throwError('error'));

    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith(['dogs']);
  });

  it('should call deleteDog and navigate to dogs on delete', () => {
    dogService.deleteDog.and.returnValue(of(null));

    component.deleteDog(1);

    expect(dogService.deleteDog).toHaveBeenCalledWith(1);
    expect(router.navigate).toHaveBeenCalledWith(['dogs']);
  });

  it('should navigate to edit form', () => {
    component.goToEditForm();

    expect(router.navigate).toHaveBeenCalledWith(['edit'], {
      relativeTo: TestBed.inject(ActivatedRoute),
    });
  });

  it('should render dog details correctly', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('.img-container img') as HTMLImageElement;
    expect(img.src).toContain('path/to/photo.jpg');
    expect(img.alt).toContain('Buddy');
    expect(compiled.querySelector('h1').textContent).toContain('Buddy');
    expect(compiled.querySelector('h1').classList).toContain('male');
    expect(compiled.querySelector('.breed').textContent).toContain('Labrador');
    expect(compiled.querySelector('.body-data p:nth-child(1)').textContent).toContain('3');
    expect(compiled.querySelector('.body-data p:nth-child(2)').textContent).toContain('60');
    expect(compiled.querySelector('.body-data p:nth-child(3)').textContent).toContain('30');
    expect(compiled.querySelector('.about p').textContent).toContain('Friendly dog');
  });

  it('should apply correct gender class', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nameElement = compiled.querySelector('h1');
    expect(nameElement.classList).toContain('male');
    expect(nameElement.classList).not.toContain('female');

    component.dog.gender = 'female';
    fixture.detectChanges();

    expect(nameElement.classList).toContain('female');
    expect(nameElement.classList).not.toContain('male');
  });

  it('should call goToEditForm on edit button click', () => {
    spyOn(component, 'goToEditForm');

    fixture.detectChanges();

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

  it('should navigate to /dogs when the back button is clicked', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.cancel') as HTMLButtonElement;
    button.click();

    expect(router.navigate).toHaveBeenCalledWith(['/dogs']);
  });
});
