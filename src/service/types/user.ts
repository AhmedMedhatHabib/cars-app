export type User = {
  id: number;
  name: string;
  img: string;
};

export type Usage = {
  energy: string;
  range: string;
  break_fluid: string;
  tire_wear: string;
};

export type UserUsage = {
  id: number;
  userId: number;
  usage: Usage;
};
