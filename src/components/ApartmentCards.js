import React from 'react';
import ApartmentCard from './ApartmentCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const apartmentsData = [
  {
    apartmentId: '234234',
    title: 'Primorese Apartment',
    host: {
      id: '335353',
      name: 'Harry Maguire',
    },
    maxPersons: 5,
    baths: 4,
    beds: 2,
    spacing: '500 ft^2',
    rating: 4.25,
    price: 450,
    currency: 'euro',
  },
  {
    apartmentId: '767674',
    title: 'Cantonese Apartment',
    host: {
      id: '562343',
      name: 'John Stones',
    },
    maxPersons: 2,
    baths: 2,
    beds: 1,
    spacing: '250 ft^2',
    rating: 4.49,
    price: 300,
    currency: 'euro',
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
