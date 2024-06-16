import { Injectable, OnInit } from '@angular/core';
import { Dog } from './dog.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(){
    return this.http.get<Dog[]>("http://localhost:8080/dogs");
  }

  getDog(id:number){
    return this.http.get<Dog>(`http://localhost:8080/dogs/${id}`);
  }

  postDog(dog: FormData){
    return this.http.post("http://localhost:8080/dogs",dog);
  }

  editDog(id:number, dog: FormData){
    return this.http.put(`http://localhost:8080/dogs/${id}`,dog);
  }

  deleteDog(id:number){
    return this.http.delete(`http://localhost:8080/dogs/${id}`);
  }

}
