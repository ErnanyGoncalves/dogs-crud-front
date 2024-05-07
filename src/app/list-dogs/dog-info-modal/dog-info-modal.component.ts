import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-info-modal',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './dog-info-modal.component.html',
  styleUrl: './dog-info-modal.component.scss'
})
export class DogInfoModalComponent {
  dog= {
    gender: 'male'
  }
}
