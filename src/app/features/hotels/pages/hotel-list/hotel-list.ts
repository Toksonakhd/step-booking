import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../services/hotel';
import { Hotel } from '../../models/hotel.model';
import { HotelCard } from '../../components/hotel-card/hotel-card';

@Component({
  selector: 'app-hotel-list',
  imports: [FormsModule, HotelCard],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.scss'
})
export class HotelList implements OnInit {
  private hotelService = inject(HotelService);

  hotels = signal<Hotel[]>([]);
  loading = signal(true);
  error = signal('');
  search = signal('');
  searchQuery = signal('');

  filteredHotels = computed(() =>
    this.hotels().filter(hotel =>
      hotel.name.toLowerCase().includes(this.searchQuery().toLowerCase())
    )
  );

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe({
      next: hotels => {
        this.hotels.set(hotels);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load hotels');
        this.loading.set(false);
      }
    });
  }

  searchHotels(): void {
    this.searchQuery.set(this.search().trim());
  }
}