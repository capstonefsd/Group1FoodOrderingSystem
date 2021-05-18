import { Address } from './address';
import { Customer } from './Customer';

export class Orders {
  orderid: number;
  totalquantity: number;
  totalprice: number;
  addressid: Address;
  customer: Customer;
}
