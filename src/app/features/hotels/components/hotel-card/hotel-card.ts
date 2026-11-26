import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-card',
  imports: [RouterLink],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.scss'
})
export class HotelCard {
  hotel = input.required<Hotel>();
  stars = [1, 2, 3, 4, 5];
}