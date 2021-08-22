import React from 'react';
import {
  makeStyles,
  TextField,
  InputAdornment,
  Typography,
  Slider,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
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
    value: 100,
    label: '120€',
  },
  {
    value: 160,
    label: '160€',
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

  const updateBookingOptions = useStore(
    (state) => state.handleBookingFormChange
  );

  const getBookingOptions = useStore((state) => state.bookingOptions);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    updateBookingOptions({ name, value });
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
          value={getBookingOptions.persons}
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
          value={apartmentStyle}
          onChange={(e) => setApartmentStyle(e.target.value)}>
          <MenuItem value="eco">Economy</MenuItem>
          <MenuItem value="low">Standard</MenuItem>
          <MenuItem value="mid">Suite</MenuItem>
          <MenuItem value="high">Mansion</MenuItem>
        </Select>
      </FormControl>
      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={(e, newValue) => setPriceRange(newValue)}
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
