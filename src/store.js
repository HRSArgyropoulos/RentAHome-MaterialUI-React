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
  resultState: 'idle',
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
  apartmentsList: [],
  updateApartmentsList: (apartments) =>
    set(() => ({
      apartmentsList: apartments,
    })),
  updateResultsState: (resultState) =>
    set(() => ({
      resultsState: resultState,
    })),
});

const useStore = create(persist(devtools(bookingStore)));

export default useStore;
