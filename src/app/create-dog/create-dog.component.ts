import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DogService } from '../dog.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-dog',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './create-dog.component.html',
  styleUrl: './create-dog.component.scss'
})
export class CreateDogComponent {
  aboutText:string = "";
  
  selectedFile: File | null = null;
  constructor(private dogService:DogService,private router:Router){}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  
  onSubmit(formData: NgForm){

    const dogData = new FormData();

    const dog = {
      name: formData.value.name,
      age: formData.value.age,
      gender: formData.value.gender,
      breed: formData.value.breed,
      height: formData.value.height,
      weight: formData.value.weight,
      about: formData.value.about
    };

    dogData.append('dog', new Blob([JSON.stringify(dog)], { type: 'application/json' }));

    if (this.selectedFile) {
      dogData.append('photo', this.selectedFile,this.selectedFile.name);
    }

    if (dogData) {
      this.dogService.postDog(dogData).subscribe({
        complete: () => this.router.navigate(['dogs'])
      });
    }
  }
}
