export type Category = {
  id: number;
  name: string;
};

export type Activity = {
  [x: string]: any;
  id: string;
  category: number;
  name: string;
  calories: number;
};
