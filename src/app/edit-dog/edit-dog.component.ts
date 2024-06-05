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
  dog : Dog  = null;
  isLoading :boolean = false;
  editDogData: FormGroup = null;

  constructor(private dogService:DogService,private router: Router,private route: ActivatedRoute){}

  ngOnInit()  {
    
    const id:number | undefined = +this.route.snapshot.paramMap.get('id');
    this.isLoading=true;
      this.dogService.getDog(id).subscribe({next:(dog)=>{
        this.dog=dog;
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
        
      },error:(error)=>{
        this.router.navigate(['dogs'])
      },complete:()=>this.isLoading=false}); 
      
    

  }


  validateUrl(photo: FormControl): {[s:string]:boolean} {
    const urlPattern = /^(http|https):\/\/.*\.(jpg|png)$/;

    if(!urlPattern.test(photo.value)){
      return {'invalidUrl':true}
    }
      return null;
    
  }


  isFieldRequiredError(key:string) {
    const fieldControl = this.editDogData.get(key);
    return fieldControl?.hasError('required') && fieldControl?.touched;
  }

  isKeyRangeError(key:string) {
    const keyControl = this.editDogData.get(key);
    return keyControl?.touched && (keyControl?.hasError('min') || keyControl?.hasError('max'));
  }

  

  isPhotoInvalidUrl() {
    const photoControl = this.editDogData.get('photo');
    return photoControl?.hasError('invalidUrl') && (photoControl?.touched || photoControl?.dirty);
  }


  onSubmit(){
    if(this.editDogData['valid']  ){
    this.dogService.editDog(this.dog.id,this.editDogData['value'] as Dog).subscribe({
      complete:()=>this.router.navigate(['dogs'])
    });
    
    }
  }
}
