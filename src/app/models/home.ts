export interface Card {
  id: string;
  name: string;
  data: Data;
  createdAt: Date;
}

export interface Data {
  color: string;
  capacity: string;
}
