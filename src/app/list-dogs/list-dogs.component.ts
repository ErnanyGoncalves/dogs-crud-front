import { Component } from '@angular/core';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogInfoModalComponent } from './dog-info-modal/dog-info-modal.component';

@Component({
  selector: 'app-list-dogs',
  standalone: true,
  imports: [DogCardComponent,DogInfoModalComponent],
  templateUrl: './list-dogs.component.html',
  styleUrl: './list-dogs.component.scss'
})
export class ListDogsComponent {

}
