import { Routes } from '@angular/router';
import { HotelList } from './features/hotels/pages/hotel-list/hotel-list';
import { HotelDetails } from './features/hotels/pages/hotel-details/hotel-details';

export const routes: Routes = [
  {
    path: '',
    component: HotelList
  },
  {
    path: 'hotel/:id',
    component: HotelDetails
  },
  {
    path: '**',
    redirectTo: ''
  }
];