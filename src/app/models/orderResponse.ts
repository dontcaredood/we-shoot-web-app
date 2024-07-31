import { Order } from './order';

export interface OrderResponse {
  noOfElements: number;
  ordersList: Order[];
}
