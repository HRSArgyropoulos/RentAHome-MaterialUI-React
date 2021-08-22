import React from 'react';
import {
  makeStyles,
  Typography,
  Slider,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import useStore from '../store';

const marks = [
  {
    value: 0,
    label: '0€',
  },
  {
    value: 40,
    label: '40€',
  },
  {
    value: 120,
    label: '120€',
  },
  {
    value: 250,
    label: '250€',
  },
  {
    value: 500,
    label: '500€',
  },
];

const useStyles = makeStyles((theme) => ({
  form: {
    width: '70%',
    margin: '0 auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  input: {
    '&::placeholder': {
      fontSize: '0.9em',
    },
  },
}));

const BookingFilters = () => {
  const classes = useStyles();

  const updateBookingFilters = useStore(
    (state) => state.filterValueChange
  );

  const bookingFilters = useStore((state) => state.bookingFilters);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    updateBookingFilters({ name, value });
  };

  const handleSliderChange = (e, newValue) => {
    updateBookingFilters({ name: 'priceRange', value: newValue });
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <FormControl>
        <InputLabel id="persons" required>
          Persons
        </InputLabel>
        <Select
          labelId="persons"
          id="persons"
          value={bookingFilters.persons}
          name="persons"
          onChange={handleFormChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4+</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="apartment-style">Apartment Style</InputLabel>
        <Select
          labelId="apartment-style"
          id="apartment-style"
          value={bookingFilters.apartmentStyle}
          name="apartmentStyle"
          onChange={handleFormChange}>
          <MenuItem value="eco">Economy</MenuItem>
          <MenuItem value="low">Standard</MenuItem>
          <MenuItem value="mid">Suite</MenuItem>
          <MenuItem value="high">Mansion</MenuItem>
        </Select>
      </FormControl>
      <Typography gutterBottom>Price Range</Typography>
      <Slider
        name="priceRange"
        value={bookingFilters.priceRange}
        onChangeCommitted={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={(priceRange) => `${priceRange} €`}
        max={500}
        marks={marks}
      />
    </form>
  );
};

export default BookingFilters;
