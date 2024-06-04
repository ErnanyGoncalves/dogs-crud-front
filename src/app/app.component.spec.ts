import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AppComponent,RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the navbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navbar = compiled.querySelector('app-navbar');
    expect(navbar).toBeTruthy();
  });


  it('should have a router-outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const routerOutlet = compiled.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
});