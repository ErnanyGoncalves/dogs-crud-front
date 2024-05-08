import { Component, OnInit } from '@angular/core';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogInfoModalComponent } from './dog-info-modal/dog-info-modal.component';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-dogs',
  standalone: true,
  imports: [DogCardComponent,DogInfoModalComponent, RouterLink],
  templateUrl: './list-dogs.component.html',
  styleUrl: './list-dogs.component.scss',
})
export class ListDogsComponent implements OnInit {
  dogs : Dog[] = [];
  dogInfo : Dog | null = null;

  constructor(private dogService:DogService,private route: ActivatedRoute){}

  ngOnInit()  {
    this.dogs = this.dogService.getDogs();
    const id:number | undefined = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.dogInfo = this.dogService.getDog(id);
    }

  }
}
