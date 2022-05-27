export interface ProductType {
  _id: string;
  createdAt: string;
  description: { _id: string; support: string }[];
  discount: number;
  image: string;
  name: string;
  offPrice: number;
  price: number;
  updatedAt: Date;
}
