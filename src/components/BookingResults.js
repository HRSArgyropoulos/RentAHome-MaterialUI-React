import React from 'react';
import useStore from '../store';

const BookingResults = () => {
  const bookingSearch = useStore((state) => state.bookingSearch);
  return (
    <div>
      {bookingSearch.persons} {bookingSearch.location} {}
    </div>
  );
};

export default BookingResults;
