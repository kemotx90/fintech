import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../../models/contact";

@Pipe({
  name: 'filtraContact'
})
export class FiltraContactPipe implements PipeTransform {

  transform(value: Contact[] | null, filtro: string | null): Contact[] {

    if(!value) { return []; }
    if(!filtro || filtro.length === 0) { return value; }

    return value.filter(contact => {
      if(contact.name.indexOf(filtro) != -1) { return true; }
      else if(contact.surname.indexOf(filtro) != -1) { return true; }
      else if(contact.iban.indexOf(filtro) != -1) { return true; }
      else return false;
    })

  }

}
