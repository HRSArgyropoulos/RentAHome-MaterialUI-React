import create from 'zustand';
import { devtools /* persist */ } from 'zustand/middleware';

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

  // List apartment (host stepper)
  hostStepper: 0,
  forwardsStepper: () =>
    set((state) => ({
      hostStepper: state.hostStepper + 1,
    })),
  backwardsStepper: () =>
    set((state) => ({
      hostStepper: state.hostStepper - 1,
    })),
  resetStepper: () =>
    set(() => ({
      hostStepper: 0,
    })),
  /* moveStepper: (direction) =>
    set((state) => ({
      hostStepper:
        direction === 'forwards'
          ? state.hostStepper + 1
          : direction === 'backwards'
          ? state.hostStepper - 1
          : 0,
    })), */
  hostStepperForm: {
    hostId: '',
    hostName: '',
    hostFound: false,
  },
  changeStepStatus: (step) =>
    set((state) => ({
      hostStepStatus: state.hostStepStatus.splice(
        step,
        1,
        !state.hostStepStatus[step]
      ),
    })),
  changeHostStepperInput: (change) =>
    set((state) => ({
      hostStepperForm: {
        ...state.hostStepperForm,
        [change.name]: change.value,
      },
    })),
});

const useStore = create(devtools(bookingStore));

export default useStore;
