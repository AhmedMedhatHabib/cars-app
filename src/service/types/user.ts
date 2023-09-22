import { Recommendation } from './car';

export type Usage = {
  energy?: string;
  range?: string;
  break_fluid?: string;
  tire_wear?: string;
};

export type Loan = {
  id: number;
  value: number;
  startDate: Date;
  endDate: Date;
  remaining: number;
};

export type Benefits = {
  loan?: Loan;
  badges?: number;
  points?: number;
};

export type User = {
  id: number;
  name: string;
  img: string;
};

export type UserUsage = {
  id: number;
  userId: number;
  usage: Usage;
};

export type UserBenefits = {
  id: number;
  userId: number;
  benefits: Benefits;
};

export type UserRecommendations = {
  id: number;
  userId: number;
  recommendation?: Recommendation[];
};
