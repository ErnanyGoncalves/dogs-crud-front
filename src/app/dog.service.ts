import { Injectable, OnInit } from '@angular/core';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private dogs : Dog[] = []

  constructor() { }

  getDogs(){
    return this.dogs;
  }

  getDog(id:number){
    return this.dogs.filter((d:Dog)=>d.id === id)[0];
  }

  postDog(dog: Dog){
    this.dogs.push({...dog,id:Date.now()});
  }

  editDog(id:number, dog: Dog){
    this.dogs = this.dogs
    .filter((d: Dog) => d.id !== id) 
    .concat({...dog,id});
  }

  deleteDog(id:number){
    this.dogs = this.dogs.filter((d: Dog) => d.id !== id);
  }

}
