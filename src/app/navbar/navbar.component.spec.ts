import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [], 
      imports: [NavbarComponent,RouterTestingModule ], 
      providers: [], 
      schemas: [] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
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
});
