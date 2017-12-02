import { Injectable } from '@angular/core';

@Injectable()
export class AgeService {

  constructor() {}

  calculateAge(bday: Date, reference?: Date): number {
    const base: any =  reference || new Date();
    const diff = Math.abs(base - < any > bday);
    return Math.floor(Math.abs(diff) / 31556900000);
  }

}
