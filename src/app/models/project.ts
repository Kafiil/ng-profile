export class Project {
  title: string;
  details: string;
  image: string;
  technologies: string[];
  tools: string[];
  libraries: string[];

  constructor() {
    this.libraries = [];
    this.tools = [];
    this.technologies = [];
    console.log('project created');
  }
}
