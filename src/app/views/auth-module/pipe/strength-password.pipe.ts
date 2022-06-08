import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strengthPassword'
})
export class StrengthPasswordPipe implements PipeTransform {

  transform(passwordLength: number): number {
    return passwordLength * 5;
  }

}
