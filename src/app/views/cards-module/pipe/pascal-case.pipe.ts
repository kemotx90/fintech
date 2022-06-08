import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {

  transform(stringToCapitalize: string): string {
    if(!stringToCapitalize || stringToCapitalize.length === 0) {
      return stringToCapitalize;
    }

    return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
  }

}
