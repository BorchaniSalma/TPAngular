export class Personne {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  citation: string;
  job: string;
  constructor(
    id: number = 0,
    name: string = '',
    firstname: string = '',
    age: number = 0,
    path: string = '',
    citation: string,
    job: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.path = path;
    this.citation = citation;
    this.job = job;
  }
}
