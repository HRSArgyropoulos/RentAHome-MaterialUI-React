import { React, useState, useEffect } from 'react';
import {
  makeStyles,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import HotelIcon from '@material-ui/icons/Hotel';
import getApartments from '../services/apartmentsSearch';
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
    persons: '',
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
    submitBookingSearch(searchState);
  };

  /* Fetch apartment results  */
  const { location, checkIn, checkOut, persons } = useStore(
    (state) => state.bookingSearch
  );

  const updateApartmentsList = useStore(
    (state) => state.updateApartmentsList
  );

  const updateResultsState = useStore(
    (state) => state.updateResultsState
  );

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await getApartments(
        location,
        checkIn,
        checkOut,
        persons
      );
      // update global state
      if (!response.data.apartments.length) {
        updateResultsState('empty');
      } else {
        updateApartmentsList(response.data.apartments);
        updateResultsState('data');
      }
    };
    if (location && checkIn && checkOut && persons) fetchApartments();
    else updateResultsState('idle');
  }, [
    location,
    checkIn,
    checkOut,
    persons,
    updateApartmentsList,
    updateResultsState,
  ]);

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
      <FormControl>
        <InputLabel id="persons" required>
          Persons
        </InputLabel>
        <Select
          labelId="persons"
          id="persons"
          value={searchState.persons}
          name="persons"
          onChange={handleChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4+</MenuItem>
        </Select>
      </FormControl>
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
