import { create } from 'zustand';

type ProductType = 'flight' | 'hotel';

export interface BaseProduct {
  id: string;
  name: string;
  price: number;
  type: ProductType;
}

export interface FlightProduct extends BaseProduct {
  type: 'flight';
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  passengerName: string;
  passportNumber: string;
  email: string;
  phone: string;
}

export interface HotelProduct extends BaseProduct {
  type: 'hotel';
  hotelName: string;
  roomType: string;
  checkInDate: Date;
  checkOutDate: Date;
  guestCount: number;
}

export type Product = FlightProduct | HotelProduct;

interface BasketState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  getTotalPrice: () => number;
}

const useBasketStore = create<BasketState>((set, get) => ({
  products: [],
  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),
  removeProduct: (productId) => set((state) => ({
    products: state.products.filter(product => product.id !== productId),
  })),
  getTotalPrice: () => {
    const { products } = get();
    return products.reduce((total, product) => total + product.price, 0);
  },
}));

export default useBasketStore;
