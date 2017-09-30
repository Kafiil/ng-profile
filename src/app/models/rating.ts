export class Rating {
  full: number;
  half: boolean;
  total: number;

  constructor() {}

  public static createRating(full: number, total: number, half: boolean = false) {
    const rating = new Rating();
    rating.full = full;
    rating.half = half;
    rating.total = total;
    return rating;
  }
}
