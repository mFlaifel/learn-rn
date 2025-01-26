export interface Plant {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export type Filter = 'All' | 'Indoor' | 'Outdoor';
