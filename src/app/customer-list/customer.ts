export interface ICustomer {
  customerNo: number;
  name: string;
  address: string;
  city: string;
  country: string;
}

export const customerTable: ICustomer[] = [
  {
    customerNo: 1,
    name: 'Mark Vought',
    address: '',
    city: 'London',
    country: 'UK',
  },
  {
    customerNo: 2,
    name: 'John Smith',
    address: '',
    city: 'New York',
    country: 'USA',
  },
  {
    customerNo: 3,
    name: 'Merry Ann',
    address: '',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    customerNo: 4,
    name: 'Rajesh Khatri',
    address: '',
    city: 'Mumbai',
    country: 'India',
  },
  {
    customerNo: 5,
    name: 'Rahul Raj',
    address: '',
    city: 'Delhi',
    country: 'India',
  },
];
