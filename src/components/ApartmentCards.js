import { React } from 'react';
import ApartmentCard from './ApartmentCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useStore from '../store';

const useStyles = makeStyles({
  cards: {
    width: '80%',
    margin: '1rem auto',
  },
});

const ApartmentCards = () => {
  const classes = useStyles();

  /* const apartmentsData = useStore((state) => state.apartmentsList); */
  const apartmentsData = useStore(
    (state) => state.filteredApartmentsList
  );

  return (
    /* List of cards (colymn) */
    <Grid container direction="column" className={classes.cards}>
      {apartmentsData &&
        apartmentsData.map((apartment) => (
          <ApartmentCard
            key={apartment.apartmentId}
            apartmentData={apartment}
          />
        ))}
    </Grid>
  );
};

export default ApartmentCards;
