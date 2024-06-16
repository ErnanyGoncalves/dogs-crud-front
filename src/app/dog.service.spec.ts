import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DogService } from './dog.service';
import { Dog } from './dog.model';

describe('DogService', () => {
  let service: DogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogService]
    });

    service = TestBed.inject(DogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch dogs', () => {
    const dummyDogs: Dog[] = [
      new Dog(1, 'Buddy', 3, 'male', 'Labrador', 60, 30, "photo1", 'Friendly dog'),
      new Dog(2, 'Lucy', 4, 'female', 'Beagle', 40, 20,"photo2", 'Loves to play')
    ];

    service.getDogs().subscribe(dogs => {
      expect(dogs.length).toBe(2);
      expect(dogs).toEqual(dummyDogs);
    });

    const req = httpMock.expectOne('http://localhost:8080/dogs');
    expect(req.request.method).toBe('GET');
    req.flush(dummyDogs);
  });

  it('should fetch a single dog by ID', () => {
    const dummyDog: Dog = new Dog(1, 'Buddy', 3, 'male', 'Labrador', 60, 30, "photo1", 'Friendly dog');

    service.getDog(1).subscribe(dog => {
      expect(dog).toEqual(dummyDog);
    });

    const req = httpMock.expectOne('http://localhost:8080/dogs/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyDog);
  });

  it('should post a new dog', () => {
    const dummyDog: FormData = new FormData();
    dummyDog.append('name', 'Buddy');

    service.postDog(dummyDog).subscribe(response => {
      expect(response).toBe(dummyDog);
    });

    const req = httpMock.expectOne('http://localhost:8080/dogs');
    expect(req.request.method).toBe('POST');
    req.flush(dummyDog);
  });


  it('should update an existing dog', () => {
    const dummyDog: FormData = new FormData();
    dummyDog.append('name', 'Buddy');

    service.editDog(1, dummyDog).subscribe(response => {
      expect(response).toBe(dummyDog);
    });

    const req = httpMock.expectOne('http://localhost:8080/dogs/1');
    expect(req.request.method).toBe('PUT');
    req.flush(dummyDog);
  });
  
  it('should delete a dog', () => {
    service.deleteDog(1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne('http://localhost:8080/dogs/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
