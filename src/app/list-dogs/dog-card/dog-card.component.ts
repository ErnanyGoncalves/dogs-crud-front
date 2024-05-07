import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.scss'
})
export class DogCardComponent {
  dog= {
    gender:'male'
  }
}
