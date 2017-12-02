export class Rating {
  full: number;
  half: boolean;
  total: number;

  constructor(full?: number, total?: number, half?: boolean) {
    this.full = full;
    this.half = half;
    this.total = total;
  }
}
