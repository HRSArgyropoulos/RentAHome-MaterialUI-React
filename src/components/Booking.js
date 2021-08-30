import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import BookingForm from './BookingForm';
import BookingResults from './BookingResults';
import BookingFilters from './BookingFilters';
import useStore from '../store';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(241, 231, 254, 1)',
    padding: '5rem 0',
  },
  results: {
    width: '95%',
    margin: '0 auto',
  },
});

const Booking = () => {
  const classes = useStyles();

  const apartmentsList = useStore((state) => state.apartmentsList);

  const resultsState = useStore((state) => state.resultsState);

  return (
    <>
      <div className={classes.root}>
        <h2 style={{ padding: 0 }}>Book your stay</h2>
        <BookingForm />
      </div>
      {apartmentsList.length !== 0 && (
        <Grid container spacing={4} className={classes.results}>
          <Grid item md={3} xs={12}>
            <BookingFilters />
          </Grid>
          <Grid item md={9} xs={12}>
            <BookingResults />
          </Grid>
        </Grid>
      )}
      {resultsState === 'empty' && 'No results could be found'}
    </>
  );
};

export default Booking;
