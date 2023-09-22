export type Car = {
  id: number;
  name: string;
  brand: string;
  type: ['COUPE' | 'SUV' | 'SEDAN'];
  seats: number;
  transmission: ['MANUAL' | 'AUTOMATIC'];
  rentPrice: number;
  liked: boolean;
};

export type Recommendation = Car & {
  recommendation: number;
};
