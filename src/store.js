import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const bookingStore = (set) => ({
  bookingFilters: {
    apartmentStyle: '',
    apartmentSize: '',
    priceRange: [20, 120],
  },
  bookingSearch: {
    location: '',
    checkIn: '',
    checkOut: '',
    persons: '',
  },
  resultsState: 'idle',
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
    set({ resultsState: resultState }),
  filteredApartmentsList: [],
  updateFilteredApartmentsList: (apartments) =>
    set(() => ({
      filteredApartmentsList: apartments,
    })),
});

const useStore = create(persist(devtools(bookingStore)));

export default useStore;
