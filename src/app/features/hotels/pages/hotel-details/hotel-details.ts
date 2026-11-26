import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HotelService } from '../../services/hotel';
import { RoomService } from '../../../rooms/services/room';
import { HotelDetails as HotelDetailsModel } from '../../models/hotel.model';
import { Room } from '../../../rooms/models/room.model';
import { RoomCard } from '../../../rooms/components/room-card/room-card';

@Component({
  selector: 'app-hotel-details',
  imports: [RoomCard],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.scss'
})
export class HotelDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private hotelService = inject(HotelService);
  private roomService = inject(RoomService);

  hotel = signal<HotelDetailsModel | null>(null);
  rooms = signal<Room[]>([]);
  selectedImage = signal('');
  loading = signal(true);
  error = signal('');

  stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    forkJoin({
      hotel: this.hotelService.getHotelById(id),
      rooms: this.roomService.getRooms(id)
    }).subscribe({
      next: response => {
        this.hotel.set(response.hotel);
        this.rooms.set(response.rooms);
        this.selectedImage.set(response.hotel.thumbnail);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load hotel details');
        this.loading.set(false);
      }
    });
  }

  changeImage(image: string): void {
    this.selectedImage.set(image);
  }
}