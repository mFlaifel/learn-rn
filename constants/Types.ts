export interface Plant {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  careMethod: string;
  rating: number;
  reviews: {
    name: string;
    avatar: string;
    review: string;
  }[];
  image: string;
}

export type Filter = 'All' | 'Indoor' | 'Outdoor';
