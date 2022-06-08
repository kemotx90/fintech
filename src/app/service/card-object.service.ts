import { Injectable } from '@angular/core';
import {Card} from "../models/card";
import {Contact} from "../models/contact";
import {Location} from "../models/location";
import {DayWithSlots} from "../models/day-with-slots";

@Injectable({
  providedIn: 'root'
})
export class CardObjectService {

  private cards: Card[] = [
    {
      _id: '2',
      number: '123456789',
      ownerId: 'aaaaaaaa',
      owner: 'pollo pinco',
      amount: 4000,
      type: 'visa',
      movements: [
        {
          _id: '1',
          type: 'in',
          amount: 100,
          title: 'banca',
          description: 'stipendiosgdrgsdrgdgsdgrsdrgdrsgdrgrgsdrgdrgsdgsdrgrd',
          cardId: '123456789',
          timestamp: 1653167776
        },
        {
          _id: '2',
          type: 'out',
          amount: 150,
          title: 'stipendio',
          description: 'pagamentosrgdrgdrgdrsgrgsdgsdrgsdrgrdgsgrdgdsrgdsrgrdsgsdrgrsdgsrdg',
          cardId: '123456789',
          timestamp: 1653167897
        },
        {
          _id: '1',
          type: 'in',
          amount: 100,
          title: 'banca',
          description: 'stipendiosgdrgsdrgdgsdgrsdrgdrsgdrgrgsdrgdrgsdgsdrgrd',
          cardId: '123456789',
          timestamp: 1653167776
        },
        {
          _id: '2',
          type: 'out',
          amount: 150,
          title: 'stipendio',
          description: 'pagamentosrgdrgdrgdrsgrgsdgsdrgsdrgrdgsgrdgdsrgdsrgrdsgsdrgrsdgsrdg',
          cardId: '123456789',
          timestamp: 1653167897
        },
        {
          _id: '1',
          type: 'in',
          amount: 100,
          title: 'banca',
          description: 'stipendiosgdrgsdrgdgsdgrsdrgdrsgdrgrgsdrgdrgsdgsdrgrd',
          cardId: '123456789',
          timestamp: 1653167776
        },
        {
          _id: '2',
          type: 'out',
          amount: 150,
          title: 'stipendio',
          description: 'pagamentosrgdrgdrgdrsgrgsdgsdrgsdrgrdgsgrdgdsrgdsrgrdsgsdrgrsdgsrdg',
          cardId: '123456789',
          timestamp: 1653167897
        }
      ]
    },
    {
      _id: '123456',
      number: '8745965874',
      ownerId: 'sssss',
      owner: 'pinco pollo',
      amount: 2000,
      type: 'mastercard',
      movements: [
        {
          _id: '1',
          type: 'in',
          amount: 30,
          title: 'banca',
          description: 'stipendioooooosdrgrgsrgsrdgrdgrdgrdgsdrgrdgdrsgrdsgsdrgsdrgdrsgrdg',
          cardId: '123456789',
          timestamp: 1653167776
        },
        {
          _id: '2',
          type: 'out',
          amount: 20,
          title: 'stipendio',
          description: 'pagamentooooosrgrdsgsdrgsrdgsgrgsdrgdrgdrsgdrsgrdgdrsgsdrgsdrgdrsgdsrgdrsgd',
          cardId: '123456789',
          timestamp: 1653167897
        }
      ]
    }
  ];

  private contacts: Contact[] = [
    {
      _id: '12345',
      name: 'porco',
      surname: 'spino',
      iban: 'IT1515fs4e8f4es8f34es',
    },
    {
      _id: '48648648',
      name: 'aaaa',
      surname: 'vvvvvvv',
      iban: 'rdsrehydtrnhdjty42486348'
    },
    {
      _id: '458348348',
      name: 'nnnnn',
      surname: 'dtbtfbtfzd',
      iban: 'rgsdrgsdrgsdrgrgsdrgsrgsrgdfesfaesfa'
    },
    {
      _id: '2734868',
      name: 'yjjgyujgyj',
      surname: 'dtbyjgyjgyjgytfbtfzd',
      iban: 'gyjgfyjgyjfyjfgyjfgyjfgyjfgyjfgyj'
    },
    {
      _id: '53483483483',
      name: 'yjjgy848648648ujgyj',
      surname: '864864868464834836',
      iban: '86486486348648648648648'
    }
  ];

  private locations: Location[] = [
    {
      _id: '4546544tfhtfhtf',
      name: 'Banca1',
      address: 'Piazzola dei boschi',
      phone: '052266555',
      email: 'prova@mail.it',
      coords: [43.77226765889649, 11.252914284409078]
    },
    {
      _id: '54684tfh68t4h6ft',
      name: 'Banca2',
      address: 'Piazzola dei fossi',
      phone: '056648855',
      email: 'piazzola@mail.it',
      coords: [43.77722568721051, 11.21446213570544]
    }
  ];

  private dayWithSlots: DayWithSlots[] = [
    {
      day: '30/05/2022',
      slots: [2,5,6,18,22]
    },
    {
      day: '05/06/2022',
      slots: [2,5]
    },
    {
      day: '06/06/2022',
      slots: [5]
    },
    {
      day: '07/06/2022',
      slots: [18,19]
    }
  ]

  constructor() { }

  getFakeCards() {
    return this.cards;
  }

  getFakeContacts() {
    return this.contacts;
  }

  getFakeLocations() {
    return this.locations;
  }

  getFakeDayWithSlots() {
    return this.dayWithSlots;
  }

}
