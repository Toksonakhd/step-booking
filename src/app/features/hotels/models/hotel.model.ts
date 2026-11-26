import { Address } from './address.model';

export interface Hotel {
  id: number;
  name: string;
  starRating: number;
  thumbnail: string;
  averageRating: number;
  reviewCount: number;
  roomCount: number;
  address: Address;
}

export interface HotelDetails extends Hotel {
  description: string;
  phoneNumber: string;
  email: string;
  gallery: string[];
  specifications: Record<string, boolean>;
}

export interface HotelsResponse {
  data: {
    items: Hotel[];
  };
}

export interface HotelDetailsResponse {
  data: HotelDetails;
}