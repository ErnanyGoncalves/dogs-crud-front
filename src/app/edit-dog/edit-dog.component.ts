import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-dog',
  standalone: true,
  imports: [],
  templateUrl: './edit-dog.component.html',
  styleUrl: './edit-dog.component.scss'
})
export class EditDogComponent {
  name="Dog"

  dog={
    name:"Dog",
    age:1,
    gender:'male',
    breed:'Some breed',
    height: 15,
    weight: 40,
    image: null,
    about: 'Some text'
  }
}
