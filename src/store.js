import create from 'zustand';
import { devtools } from 'zustand/middleware';

const bookingStore = (set) => ({
  bookingFilters: {
    persons: 1,
    apartmentStyle: '',
    priceRange: [20, 120],
  },
  bookingSearch: {
    location: '',
    checkIn: '',
    checkOut: '',
  },
  filterValueChange: (change) =>
    set((state) => ({
      bookingOptions: {
        ...state.bookingOptions,
        [change.name]: change.value,
      },
    })),
  submitBookingSearch: (bookingSearchOptions) =>
    set(() => ({
      bookingSearch: bookingSearchOptions,
    })),
});

const useStore = create(devtools(bookingStore));

export default useStore;
