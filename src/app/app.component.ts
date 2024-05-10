import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ListDogsComponent } from './list-dogs/list-dogs.component';
import { CreateDogComponent } from './create-dog/create-dog.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,ListDogsComponent,CreateDogComponent,EditDogComponent, DogDetailComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
