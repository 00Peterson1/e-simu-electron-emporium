
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  icon: string;
  count: number;
}
