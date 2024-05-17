import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from '../dog.service';
import { Dog } from '../dog.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-dog',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './create-dog.component.html',
  styleUrl: './create-dog.component.scss'
})
export class CreateDogComponent {

  constructor(private dogService:DogService,private router:Router){}

  validateUrl(url: string): boolean {
    const urlPattern = /^(http|https):\/\/.*\.(jpg|png)$/;
    return urlPattern.test(url);
  }

  onSubmit(formData: HTMLFormElement){
    
    if(formData['valid'] && this.validateUrl(formData['value'].photo)){
    this.dogService.postDog(formData['value'] as Dog);
    this.router.navigate(['dogs']);
    }
  }
}
