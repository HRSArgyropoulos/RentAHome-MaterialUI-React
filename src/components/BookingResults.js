import React from 'react';
import useStore from '../store';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'pink',
    minHeight: '500px',
  },
});

const BookingResults = () => {
  const classes = useStyles();
  const bookingSearch = useStore((state) => state.bookingSearch);
  const bookingFilters = useStore((state) => state.bookingFilters);
  return (
    <div className={classes.root}>
      {bookingSearch.location}
      {bookingFilters.priceRange} {bookingFilters.persons}{' '}
      {bookingFilters.apartmentStyle}
    </div>
  );
};

export default BookingResults;
