export type Transmission = ['MANUAL' | 'AUTOMATIC'];
export type Car = {
  id: number;
  name: string;
  brand: string;
  type: ['COUPE' | 'SUV' | 'SEDAN'];
  seats: number;
  transmission: Transmission;
  rentPrice: number;
  img: string;
};

export type Recommendation = Car & {
  recommendation: number;
  distance: string;
};
