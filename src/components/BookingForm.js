import { React, useState } from 'react';
import {
  makeStyles,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';
import HotelIcon from '@material-ui/icons/Hotel';
import useStore from '../store';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '70%',
    margin: '0 auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& MuiButton-root': {
      position: 'relative',
      bottom: 0,
    },
  },
  input: {
    '&::placeholder': {
      fontSize: '0.9em',
    },
  },
}));

const BookingForm = () => {
  const classes = useStyles();

  /* Form state */
  const [searchState, setSearchState] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
  });

  /* Form state change */
  const handleChange = (e) => {
    setSearchState({
      ...searchState,
      [e.target.name]: e.target.value,
    });
  };

  /* Submit form action to update store */
  const submitBookingSearch = useStore(
    (state) => state.submitBookingSearch
  );

  /* Handle submit button -> call action */
  const handleSubmitBookingForm = (e) => {
    e.preventDefault();
    console.log(searchState);
    submitBookingSearch(searchState);
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="location"
        label="Location"
        name="location"
        onChange={handleChange}
        placeholder="Where do you want to stay?"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HotelIcon />
            </InputAdornment>
          ),
          classes: { input: classes.input },
        }}
      />
      <TextField
        id="check-in"
        label="Check In"
        type="date"
        name="checkIn"
        onChange={handleChange}
        required
        value={searchState.checkIn}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="check-out"
        label="Check Out"
        type="date"
        name="checkOut"
        onChange={handleChange}
        required
        value={searchState.checkOut}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        onClick={handleSubmitBookingForm}>
        Search
      </Button>
    </form>
  );
};

export default BookingForm;
