import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import {
  HotelsResponse,
  HotelDetailsResponse
} from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private http = inject(HttpClient);
  private apiUrl = 'https://bookingapi.stepacademy.ge/api';

  getHotels() {
    return this.http
      .get<HotelsResponse>(`${this.apiUrl}/hotels`)
      .pipe(map(response => response.data.items));
  }

  getHotelById(id: number) {
    return this.http
      .get<HotelDetailsResponse>(`${this.apiUrl}/hotels/${id}`)
      .pipe(map(response => response.data));
  }
}