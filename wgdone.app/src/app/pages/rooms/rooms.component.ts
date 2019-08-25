import { Component, OnInit } from '@angular/core';

import { Room } from 'src/app/models/Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.index().subscribe(rooms => {
      this.rooms = rooms;
    });
  }
}
