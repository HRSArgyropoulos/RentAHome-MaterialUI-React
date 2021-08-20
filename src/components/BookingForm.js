import { React, useState } from 'react';
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
import HotelIcon from '@material-ui/icons/Hotel';

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

const BookingForm = () => {
  const classes = useStyles();
  const [priceRange, setPriceRange] = useState([20, 120]);
  const [persons, setPersons] = useState(1);
  const [apartmentStyle, setApartmentStyle] = useState('eco');
  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="location"
        label="Location"
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
        required
        defaultValue="2021-09-21"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="check-out"
        label="Check Out"
        type="date"
        required
        defaultValue="2021-09-25"
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
          value={persons}
          onChange={(e) => setPersons(e.target.value)}>
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
      <Button
        color="primary"
        variant="contained"
        onClick={() => console.log('submit')}>
        Search
      </Button>
    </form>
  );
};

export default BookingForm;
