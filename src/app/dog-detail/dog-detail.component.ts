import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DogService } from '../dog.service';
import { Dog } from '../dog.model';
import { NgClass } from '@angular/common';
import { AgePipe } from './age.pipe';
import { HeightPipe } from './height.pipe';
import { WeightPipe } from './weight.pipe';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [NgClass, RouterLink, AgePipe, HeightPipe, WeightPipe],
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.scss',
})
export class DogDetailComponent {
  dog: Dog = null;
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService
  ) {}

  ngOnInit() {
    const id: number | undefined = +this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.dogService.getDog(id).subscribe({
      next: (dog) => {
        this.dog = dog;
        this.isLoading = false;
      },
      error: (error) => {
        this.router.navigate(['dogs']);
      },
    });
  }

  navigateToDogs() {
    this.router.navigate(['/dogs']);
  }

  deleteDog(id: number) {
    this.dogService
      .deleteDog(id)
      .subscribe({ complete: () => this.router.navigate(['dogs']) });
  }

  goToEditForm() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
