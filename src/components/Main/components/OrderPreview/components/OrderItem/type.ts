export type OrderItemType = {
  order: Order
}

export type Order = {
  id:      string;
  amount?:  number;
  product?: ProductType;
}

export type ProductType = {
  id:    string;
  name:  string;
  value: string;
  photo: string;
} 