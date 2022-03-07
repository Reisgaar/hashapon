import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() { }

  public moveSlider(next: boolean, actualPosition: number, element: string, items: number): number {
    const firstBaby = document.getElementById(element) as HTMLElement;
    let position: number;
    // Set actual position
    if (next) {
      position = actualPosition - 100;
    } else {
      position = actualPosition + 100;
    }
    // Check if first or last
    if (position === ((items * -100) + 5)) {
      position = 5;
    } else if (position === 105) {
      position = (((items - 1) * -100) + 5);
    }
    // Update position
    firstBaby.style.marginLeft = position + 'vw';
    return position;
  }

  public moveSliderOneStep(next: boolean, actualPosition: number, element: string, items: number, movement: number, itemsShown: number): number {
    const firstBaby = document.getElementById(element) as HTMLElement;
    let position: number;
    // Set actual position
    if (next) {
      position = parseFloat((actualPosition - movement).toFixed(2));
    } else {
      position = parseFloat((actualPosition + movement).toFixed(2));
    }
    // Check if first or last i on set
    console.log(position);
    if (position === ( ( (items - itemsShown + 1) * (movement * -1) ) + 5) ) {
      position = 5;
    } else if (position === 5 + movement) {
      position = ( ( (items - itemsShown) * (movement * -1) ) + 5);
    }
    // Update position
    firstBaby.style.marginLeft = position + 'vw';
    return position;
  }
}
