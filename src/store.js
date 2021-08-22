import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
      bookingFilters: {
        ...state.bookingFilters,
        [change.name]: change.value,
      },
    })),
  submitBookingSearch: (bookingSearchOptions) =>
    set(() => ({
      bookingSearch: bookingSearchOptions,
    })),
});

const useStore = create(persist(devtools(bookingStore)));

export default useStore;
