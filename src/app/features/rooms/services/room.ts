import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { RoomsResponse } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private http = inject(HttpClient);
  private apiUrl = 'https://bookingapi.stepacademy.ge/api';

  getRooms(hotelId: number) {
    return this.http
      .get<RoomsResponse>(`${this.apiUrl}/rooms/${hotelId}`)
      .pipe(map(response => response.data.items));
  }
}