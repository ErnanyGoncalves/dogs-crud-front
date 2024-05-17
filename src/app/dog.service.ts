import { Injectable, OnInit } from '@angular/core';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private dogs : Dog[] = [
    {
      id:1,name:'Lassie', age: 5, gender:'female',breed:"Collie",height: 50,weight: 70,photo:'https://love.doghero.com.br/wp-content/uploads/2021/10/pexels-kanashi-5957235-scaled.jpg',about:`Lassie is a fictional female Rough Collie dog and is featured in a 1938 short story by Eric Knight that was later expanded to a 1940 full-length novel, Lassie Come-Home. Knight's portrayal of Lassie bears some features in common with another fictional female collie of the same name, featured in the British writer Elizabeth Gaskell's 1859 short story "The Half Brothers". In "The Half Brothers", Lassie is loved only by her young master and guides the adults back to where two boys are lost in a snowstorm.`,
    },
    {
      id:2,name:'Lilith', age: 3, gender:'female',breed:"Chihuahua",height: 10,weight: 1,photo:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",about:null,
    },
    {
      id:3,name:'Thor', age: 7, gender:'male',breed:"Husky",height: 70,weight: 70,photo:"https://d.newsweek.com/en/full/2112338/close-view-siberian-husky.jpg",about:"Thor is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.",
    },
    // {
    //   id:1,name:'Lassie', age: 5, gender:'female',breed:"Collie",height: 50,weight: 70,photo:'https://love.doghero.com.br/wp-content/uploads/2021/10/pexels-kanashi-5957235-scaled.jpg',about:`Lassie is a fictional female Rough Collie dog and is featured in a 1938 short story by Eric Knight that was later expanded to a 1940 full-length novel, Lassie Come-Home. Knight's portrayal of Lassie bears some features in common with another fictional female collie of the same name, featured in the British writer Elizabeth Gaskell's 1859 short story "The Half Brothers". In "The Half Brothers", Lassie is loved only by her young master and guides the adults back to where two boys are lost in a snowstorm.`,
    // },
    
  ]

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
