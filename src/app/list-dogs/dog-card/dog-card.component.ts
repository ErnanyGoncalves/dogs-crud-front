import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dog } from '../../dog.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.scss'
})
export class DogCardComponent {
  @Input() dog : Dog;
}
