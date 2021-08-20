import React from 'react';
import { makeStyles, ButtonGroup, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    padding: '3rem 0',
    backgroundColor: 'rgba(242, 241, 239, 1)',
  },
  buttonGroup: {
    margin: '3rem 0',
  },
});

const BookApartmentRedirect = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Book your stay or become a host</h2>
      <p>
        From luxury apartments to cozy ones from expensive to value
        for money homes to stay.
      </p>
      <p>
        Start your stay today or list your own to make your bread.
      </p>
      <ButtonGroup
        className={classes.buttonGroup}
        variant="contained"
        color="primary"
        size="large">
        <Button>
          <Link to="/to-rent">Rent</Link>
        </Button>
        <Button>
          <Link to="/to-host">Host</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default BookApartmentRedirect;
