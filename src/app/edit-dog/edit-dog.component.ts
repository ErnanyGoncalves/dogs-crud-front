import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dog',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-dog.component.html',
  styleUrl: './edit-dog.component.scss'
})
export class EditDogComponent implements OnInit {
  dog : Dog | null = null;
  editDogData: FormGroup;

  constructor(private dogService:DogService,private router: Router,private route: ActivatedRoute){}

  ngOnInit()  {
    
    const id:number | undefined = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.dog = this.dogService.getDog(id);
      this.editDogData = new FormGroup({
        'name':  new FormControl(this.dog.name, Validators.required),
        'age': new FormControl(this.dog.age, [Validators.required,Validators.min(0),Validators.max(20)]),
        'gender': new FormControl(this.dog.gender, Validators.required),
        'breed': new FormControl(this.dog.breed, Validators.required),
        'height': new FormControl(this.dog.height,[Validators.required,Validators.min(0.1)]),
        'weight': new FormControl(this.dog.weight,[Validators.required,Validators.min(0.1)]),
        'photo': new FormControl(this.dog.photo, [Validators.required,this.validateUrl.bind(this)]),
        'about': new FormControl(this.dog.about)
      })
    }else{
      this.router.navigate(['dogs'])
    }

  }

  validateUrl(photo: FormControl): {[s:string]:boolean} {
    const urlPattern = /^(http|https):\/\/.*\.(jpg|png)$/;
    if(!urlPattern.test(photo.value)){
      return {'invalidUrl':true}
    }
      return null;
    
  }

  onSubmit(){
    if(this.editDogData['valid']  ){
    this.dogService.editDog(this.dog.id,this.editDogData['value'] as Dog);
    this.router.navigate(['dogs']);
    }
  }
}
