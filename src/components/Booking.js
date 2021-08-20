import React from 'react';
import { makeStyles } from '@material-ui/core';
import BookingForm from './BookingForm';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(241, 231, 254, 1)',
    height: 'calc(100vh - 120px)',
    minHeight: '500px',
  },
});

const Booking = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Book your stay</h2>
      <BookingForm />
    </div>
  );
};

export default Booking;
