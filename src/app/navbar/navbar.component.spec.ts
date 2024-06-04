import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ListDogsComponent } from '../list-dogs/list-dogs.component';

const routes: Routes = [
  { path: 'dogs', component: ListDogsComponent }
];

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [], 
      imports: [NavbarComponent,ListDogsComponent,RouterTestingModule.withRoutes(routes) ], 
      providers: [], 
      schemas: [] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navbar with a link to /dogs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
  
    const navbar = compiled.querySelector('.navbar');
    expect(navbar).toBeTruthy();
  
    const link = compiled.querySelector('a.to-home');
    expect(link).toBeTruthy();
    expect(link.getAttribute('ng-reflect-router-link')).toBe('/dogs');
    expect(link.textContent).toContain('DOGS CRUD');
      
    const img = link.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toBe('assets/dog-paw.svg');
    expect(img.getAttribute('alt')).toBe('Dog paw');
  });

  it('should navigate to /dogs on link click', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a.to-home') as HTMLElement;

    link.click();
    
    await fixture.whenStable();
    expect(location.path()).toBe('/dogs');
  });
});
