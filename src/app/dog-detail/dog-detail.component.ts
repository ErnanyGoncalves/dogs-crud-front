import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DogService } from '../dog.service';
import { Dog } from '../dog.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.scss'
})
export class DogDetailComponent {
  dogInfo : Dog | null = null;

  constructor(private route:ActivatedRoute,private router:Router,private dogService:DogService){}


  ngOnInit()  {
    const id:number | undefined = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.dogInfo = this.dogService.getDog(id);
    }else{
      this.router.navigate(['dogs'])
    }

  }

  deleteDog(id:number){
    this.dogService.deleteDog(id);
    this.router.navigate(['dogs'])
  }

  goToEditForm(){
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
