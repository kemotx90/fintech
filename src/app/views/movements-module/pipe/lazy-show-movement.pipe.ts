import { Pipe, PipeTransform } from '@angular/core';
import {Movement} from "../../../models/movement";

@Pipe({
  name: 'lazyShowMovement'
})
export class LazyShowMovementPipe implements PipeTransform {

  transform(movements: Movement[] | undefined, numberToLoad: number): Movement[] {

    if(!movements) { return []; }
    if(!numberToLoad || numberToLoad < 5) { numberToLoad = 5; }

    movements = movements.filter((movement,index) => index < numberToLoad);
    return movements;

  }

}
