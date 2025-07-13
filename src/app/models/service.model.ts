export interface Service {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    imageUrl: string;
    userId: {
      _id: string;
      name: string;
    };
  }
  