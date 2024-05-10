import { Component, OnInit } from '@angular/core';
import { DogCardComponent } from './dog-card/dog-card.component';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-dogs',
  standalone: true,
  imports: [DogCardComponent, RouterLink],
  templateUrl: './list-dogs.component.html',
  styleUrl: './list-dogs.component.scss',
})
export class ListDogsComponent implements OnInit {
  dogs : Dog[] = [];
  

  constructor(private dogService:DogService){}

  ngOnInit()  {
    this.dogs = this.dogService.getDogs();
  }
}
