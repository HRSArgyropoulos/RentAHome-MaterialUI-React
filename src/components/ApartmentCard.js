import React from 'react';
import { Card, Grid, Button, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import KingBedIcon from '@material-ui/icons/KingBed';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    margin: '1rem 0',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  cardDetailSection: {
    margin: '0.6rem 0',
  },
});

const ApartmentCard = (props) => {
  const classes = useStyles();

  const { apartmentData } = props;
  return (
    <Card elevation={3} className={classes.card}>
      {/* Image and Details container */}
      <Grid container>
        {/* Image */}
        <Grid item md={4}>
          <img
            src={
              process.env.PUBLIC_URL +
              `img/apartments/` +
              apartmentData.apartmentId +
              '.jpg'
            }
            alt={apartmentData.title + 'apartment image'}
          />
        </Grid>
        {/* Details */}
        <Grid item md={8}>
          {/* 3 rows (title,options,button) */}
          <Grid container style={{ padding: '1.5rem' }}>
            {/* title */}
            <Grid item className={classes.cardDetailSection}>
              <h4>{apartmentData.title}</h4>
            </Grid>
            {/* options container */}
            <Grid
              container
              spacing={3}
              className={classes.cardDetailSection}>
              <Grid item>
                <PersonIcon />
                <span>{apartmentData.maxPersons} Max</span>
              </Grid>
              <Grid item>
                <BathtubIcon />
                <span>{apartmentData.baths} Baths</span>
              </Grid>
              <Grid item>
                <SquareFootIcon />
                <span>{apartmentData.spacing}</span>
              </Grid>
              <Grid item>
                <KingBedIcon />
                <span>{apartmentData.beds} Bed(s)</span>
              </Grid>
            </Grid>
            {/* button / avatar */}
            <Grid
              item
              container
              className={classes.cardDetailSection}>
              <Grid item>
                <Avatar
                  src={
                    process.env.PUBLIC_URL +
                    `img/hosts/` +
                    apartmentData.host.id +
                    '.jpg'
                  }
                  alt={apartmentData.host.name}
                  style={{ marginRight: '1rem' }}>
                  {apartmentData.host.name}
                </Avatar>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ApartmentCard;
