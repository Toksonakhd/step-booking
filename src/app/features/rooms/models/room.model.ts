export interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  pricePerNight: number;
  capacity: number;
  bedCount: number;
  isAvailable: boolean;
  thumbnail: string;
  averageRating: number;
  reviewCount: number;
}

export interface RoomsResponse {
  data: {
    items: Room[];
  };
}