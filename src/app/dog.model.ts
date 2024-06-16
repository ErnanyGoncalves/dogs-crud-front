export class Dog{
    
    constructor(public id: number,public name:string,    public age:number,    public gender: 'male'|'female',    public breed: string,    public height: number,    public weight: number,    public photo: string,    public about: string | null){}
}