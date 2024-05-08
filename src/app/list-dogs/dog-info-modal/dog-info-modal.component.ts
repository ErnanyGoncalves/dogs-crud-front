import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dog } from '../../dog.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DogService } from '../../dog.service';

@Component({
  selector: 'app-dog-info-modal',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './dog-info-modal.component.html',
  styleUrl: './dog-info-modal.component.scss'
})
export class DogInfoModalComponent {
  @Input() dog:Dog

  constructor(private route:ActivatedRoute,private router:Router,private dogService:DogService){}
  deleteDog(id:number){
    this.dogService.deleteDog(id);
    this.router.navigate(['dogs'])
  }

  goToEditForm(){
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
