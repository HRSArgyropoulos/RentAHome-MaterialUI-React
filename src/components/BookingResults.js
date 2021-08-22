import React from 'react';
import useStore from '../store';
import { makeStyles } from '@material-ui/styles';
import ApartmentCards from './ApartmentCards';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'pink',
    minHeight: '500px',
  },
  header: {
    '& img': {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    position: 'relative',
  },
  headingLocation: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'white',
    fontSize: '2em',
  },
  apartmentsContainer: { width: '50%' },
});

const BookingResults = () => {
  const classes = useStyles();
  const bookingSearch = useStore((state) => state.bookingSearch);
  const bookingFilters = useStore((state) => state.bookingFilters);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          src={
            process.env.PUBLIC_URL +
            `img/locations/` +
            bookingSearch.location.toLowerCase() +
            '.jpg'
          }
          alt={bookingSearch.location + ' apartments'}
        />
        <h2 className={classes.headingLocation}>
          {bookingSearch.location}
        </h2>
      </div>
      <p>
        Viewing apartments from {bookingSearch.checkIn} to{' '}
        {bookingSearch.checkOut}
      </p>
      <ApartmentCards className={classes.apartmentsContainer} />
    </div>
  );
};

export default BookingResults;
