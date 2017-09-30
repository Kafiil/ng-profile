import { Rating } from './rating';
export class Language {
  name: string;
  rating: Rating;
  constructor() {
    this.rating = new Rating();
  }
}
