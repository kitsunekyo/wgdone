import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/Room';
import { Task } from '../models/Task';

const ROOMS = [
  {
    id: 'c3ba84de-7577-511b-8395-1aa60dc7dd59',
    name: 'Wohnzimmer',
    tasks: [
      {
        id: '9ca29cff-4144-5b41-b874-e2e78fcf411b',
        name: 'Oberflächen wischen'
      },
      {
        id: '921d0654-ac2d-51b2-b3e7-9cced6611103',
        name: 'Staubsaugen'
      },
      {
        id: 'bf853e06-9d69-57e5-8ba6-0a1f91faa54f',
        name: 'Aufwischen'
      },
      {
        id: 'f1768621-088f-5423-a25d-305b7ed7c435',
        name: 'Fenster putzen'
      },
      {
        id: '36f2110e-2207-5a53-8686-3c3677b79c45',
        name: 'Tisch abwischen'
      }
    ]
  },
  {
    id: '8c0b3bbf-8ca0-51d1-b574-23e403b09d5d',
    name: 'Küche',
    tasks: [
      {
        id: 'b9632241-108a-5c38-ba7b-18f08e75ddb7',
        name: 'Aufwischen'
      },
      {
        id: '9b42da99-5b8f-5257-92e8-f3b040288d64',
        name: 'Staubsaugen'
      },
      {
        id: 'afcdb669-1e48-5279-9144-ca9a32c4de8a',
        name: 'Fenster putzen'
      },
      {
        id: '9eb960d5-7b8d-5260-9508-8c6c6bfd4128',
        name: 'Geschirrspüler ausräumen'
      },
      {
        id: '6f01322e-8aed-5721-b2d8-cd3848f760f1',
        name: 'Müll rausbringen'
      }
    ]
  },
  {
    id: '2932583e-cd9b-5bfc-bb38-74333e5d387a',
    name: 'Bad',
    tasks: [
      {
        id: 'ef26257b-52de-5f1c-a5db-d10c93546c7d',
        name: 'Badewanne putzen'
      },
      {
        id: '2a0d7f41-f016-5007-b82c-48d5edccf4f9',
        name: 'Spiegel putzen'
      },
      {
        id: 'ebf83011-36ac-5c68-9974-0885f80e168c',
        name: 'Fußmatte waschen'
      }
    ]
  },
  {
    id: '66771bd0-c4a2-5a71-b8a1-f80d146053f3',
    name: 'Klo'
  },
  {
    id: '4261a403-6d96-5720-b45c-769b207c1e14',
    name: 'Vorzimmer'
  },
  {
    id: '089fff0d-2506-5d64-b020-e60e30d75df1',
    name: 'Büro'
  }
];

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  rooms: Room[];

  constructor() {
    this.rooms = ROOMS;
  }

  index(): Observable<Room[]> {
    return of(this.rooms);
  }

  get(id: string) {
    return of(this.rooms.find(obj => obj.id === id));
  }

  add(name: string) {
    return of(true);
  }

  delete(id: string) {
    this.rooms = this.rooms.filter(obj => obj.id === id);
    return of(true);
  }

  getTasks(id: string): Observable<Task[]> {
    const room = this.rooms.find(obj => obj.id === id);
    return room ? of(room.tasks) : of([]);
  }
}
