import { React, useEffect } from 'react';
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
    width: '80%',
    margin: '0 auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiFormControl-root': {
      width: '50%',
      margin: '0 0.5rem 1rem 0.5rem',
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

  /* Filters state */
  const bookingFilters = useStore((state) => state.bookingFilters);

  const updateBookingFilters = useStore(
    (state) => state.filterValueChange
  );

  /* Apartments state */
  const apartmentsList = useStore((state) => state.apartmentsList);

  const updateFilteredApartmentsList = useStore(
    (state) => state.updateFilteredApartmentsList
  );

  /* Form handle changes -> update state on change */
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    updateBookingFilters({ name, value });
  };

  const handleSliderChange = (name, newValue) => {
    updateBookingFilters({ name, value: newValue });
  };

  useEffect(() => {
    const filteredResults = apartmentsList.filter((apartment) => {
      if (
        apartment.price < bookingFilters.priceRange[0] ||
        apartment.price > bookingFilters.priceRange[1]
      ) {
        return false;
      }
      return true;
    });

    /* update filtered apartments state*/
    updateFilteredApartmentsList(filteredResults);
  }, [bookingFilters, apartmentsList, updateFilteredApartmentsList]);

  return (
    <>
      <h3>Filters</h3>
      <form className={classes.form} noValidate autoComplete="off">
        <FormControl>
          <InputLabel id="apartment-style">
            Apartment Style
          </InputLabel>
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
          onChangeCommitted={(_, newValue) =>
            handleSliderChange('priceRange', newValue)
          }
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(priceRange) => `${priceRange} €`}
          max={500}
          marks={marks}
        />
      </form>
    </>
  );
};

export default BookingFilters;
