import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-dog',
  standalone: true,
  imports: [],
  templateUrl: './edit-dog.component.html',
  styleUrl: './edit-dog.component.scss'
})
export class EditDogComponent implements OnInit {
  dog : Dog | null = null;

  constructor(private dogService:DogService,private router: Router,private route: ActivatedRoute){}

  ngOnInit()  {
    
    const id:number | undefined = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.dog = this.dogService.getDog(id);
    }else{
      this.router.navigate(['dogs'])
    }

  }
}
