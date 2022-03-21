import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor() { }

  buyGachapon(): void {
    console.log('Buy new gachapon');
  }
}
