import { Injectable } from '@angular/core';

@Injectable()
export class AgeService {

  constructor() {}

  calculateAge(bday: Date): number {
    const now: any = new Date();
    const diff = Math.abs(now - < any > bday);
    return Math.floor(Math.abs(diff) / 31556900000);
  }

}
