import { Component, input } from '@angular/core';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-card',
  imports: [],
  templateUrl: './room-card.html',
  styleUrl: './room-card.scss'
})
export class RoomCard {
  room = input.required<Room>();
  stars = [1, 2, 3, 4, 5];
}