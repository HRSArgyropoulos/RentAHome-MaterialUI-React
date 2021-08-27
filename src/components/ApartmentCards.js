import React from 'react';
import ApartmentCard from './ApartmentCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const apartmentsData = [
  {
    apartmentId: '234234',
    title: 'Primorese Apartment',
    capacity: 5,
    baths: 3,
    spacing: '500 ft^2',
    beds: 2,
    price: 450,
    location: {
      id: 234234,
      title: 'Barcelona',
    },
    host: {
      id: '335353',
      name: 'Harry Maguire',
    },
  },
  {
    apartmentId: '767674',
    title: 'Cantonese Apartment',
    capacity: 2,
    baths: 2,
    spacing: '250 ft^2',
    beds: 1,
    price: 300,
    location: {
      id: 234234,
      title: 'Barcelona',
    },
    host: {
      id: '562343',
      name: 'John Stones',
    },
  },
];

const useStyles = makeStyles({
  cards: {
    width: '80%',
    margin: '1rem auto',
  },
});

const ApartmentCards = () => {
  const classes = useStyles();
  return (
    /* List of cards (colymn) */
    <Grid container direction="colymn" className={classes.cards}>
      {apartmentsData.map((apartment) => (
        <ApartmentCard
          key={apartment.apartmentId}
          apartmentData={apartment}
        />
      ))}
    </Grid>
  );
};

export default ApartmentCards;
