import create from 'zustand';

interface HotelReservation {
  id: string;
  hotelName: string;
  roomType: string;
  checkInDate: Date;
  checkOutDate: Date;
  guestCount: number;
  totalCost: number;
}

interface HotelStore {
  reservations: HotelReservation[];
  addReservation: (reservation: HotelReservation) => void;
  removeReservation: (reservationId: string) => void;
  getTotalCost: () => number;
}

const useHotelStore = create<HotelStore>((set) => ({
  reservations: [],
  addReservation: (reservation) => set((state) => ({
    reservations: [...state.reservations, reservation],
  })),
  removeReservation: (reservationId) => set((state) => ({
    reservations: state.reservations.filter(res => res.id !== reservationId),
  })),
  getTotalCost: () => {
    return useHotelStore.getState().reservations.reduce(
      (total, reservation) => total + reservation.totalCost,
      0
    );
  },
}));

export default useHotelStore;
