import { Routes } from '@angular/router';
import { ListDogsComponent } from './list-dogs/list-dogs.component';
import { CreateDogComponent } from './create-dog/create-dog.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';

export const routes: Routes = [
    {path:'dogs', component:ListDogsComponent},
    {path:'dogs/new', component:CreateDogComponent},
    {path:'dogs/:id', component:DogDetailComponent},
    {path:'dogs/:id/edit', component:EditDogComponent},
    {path:'**', redirectTo :'dogs'},
];
