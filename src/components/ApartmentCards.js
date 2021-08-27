import { React, useEffect, useState } from 'react';
import ApartmentCard from './ApartmentCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import getApartments from '../services/apartmentsSearch';
import useStore from '../store';

const useStyles = makeStyles({
  cards: {
    width: '80%',
    margin: '1rem auto',
  },
});

const ApartmentCards = () => {
  const { location } = useStore((state) => state.bookingSearch);

  const [apartmentsData, setApartmentsData] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await getApartments(location);
      setApartmentsData(response.data.apartments);
    };
    fetchApartments();
  }, [location]);

  const classes = useStyles();
  return (
    /* List of cards (colymn) */
    <Grid container direction="colymn" className={classes.cards}>
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
