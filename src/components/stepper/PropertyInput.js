import { React, useEffect } from 'react';
import useStore from '../../store';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { addHost } from '../../services/hosts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '0 auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PropertyInput = () => {
  const hostStepperForm = useStore((state) => state.hostStepperForm);

  const changeHostStepperInput = useStore(
    (state) => state.changeHostStepperInput
  );

  useEffect(() => {
    const createNewHostId = async () => {
      if (!hostStepperForm.hostFound) {
        // add new host to db and get host id
        const hostDoc = await addHost(hostStepperForm.hostName);
        const { id: hostId } = hostDoc.data.host;
        // update hostId and hostFound
        changeHostStepperInput({
          name: 'hostId',
          value: hostId,
        });
        changeHostStepperInput({
          name: 'hostFound',
          value: true,
        });
      }
    };

    createNewHostId();
  }, [
    hostStepperForm.hostFound,
    hostStepperForm.hostName,
    changeHostStepperInput,
  ]);

  const apartmentFormData = useStore(
    (state) => state.hostStepperForm.apartment
  );

  const changeFormApartment = useStore(
    (state) => state.changeFormApartment
  );

  const handleFormChange = (e) => {
    changeFormApartment({
      name: e.target.name,
      value: e.target.value,
    });
  };

  // update dates on store state after convertion
  //useEffect(() => {
  //const dateInput = availableDates.trim().split(/\s*,\s*/);
  // update store
  /* changeFormApartment({
      name: 'availableDates',
      value: dateInput,
    });
  }, [availableDates, changeFormApartment]); */

  const handleDatesForm = (e) => {
    // update store dates input
    handleFormChange({
      target: {
        name: 'availableDatesInput',
        value: e.target.value,
      },
    });
    // create array of dates based on regex
    const datesArray = e.target.value.trim().split(/\s*,\s*/);
    // update store with dates array
    handleFormChange({
      target: { name: e.target.name, value: datesArray },
    });
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            error={false}
            helperText="sdf"
            variant="outlined"
            label="Title"
            id="apartmentTitle"
            name="title"
            value={apartmentFormData.title}
            onChange={handleFormChange}
          />
          <TextField
            required
            variant="outlined"
            id="apartmentLocation"
            label="Location"
            placeholder="Barcelona, New York, London.."
            name="location"
            value={apartmentFormData.location}
            onChange={handleFormChange}
          />
          <TextField
            required
            variant="outlined"
            id="apartmentCapacity"
            label="Capacity (persons)"
            type="number"
            name="capacity"
            value={apartmentFormData.capacity}
            onChange={handleFormChange}
          />
          <FormControl
            variant="outlined"
            className={classes.formControl}>
            <InputLabel required id="apartmentBaths">
              Baths
            </InputLabel>
            <Select
              labelId="apartmentBaths"
              id="apartmentBaths"
              name="baths"
              value={apartmentFormData.baths}
              onChange={handleFormChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formControl}>
            <InputLabel required id="apartmentBeds">
              Beds
            </InputLabel>
            <Select
              labelId="apartmentBeds"
              id="apartmentBeds"
              name="beds"
              value={apartmentFormData.beds}
              onChange={handleFormChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            variant="outlined"
            id="apartmentSpacing"
            label="Spacing (in ft^2)"
            type="number"
            name="spacing"
            value={apartmentFormData.spacing}
            onChange={handleFormChange}
          />
          <TextField
            required
            variant="outlined"
            id="apartmentPrice"
            label="Price (per night)"
            type="number"
            name="price"
            value={apartmentFormData.price}
            onChange={handleFormChange}
          />
          <TextField
            required
            variant="outlined"
            id="availableDates"
            label="Available Dates"
            placeholder="DD-MM-YYYY seperated by ,"
            name="availableDates"
            value={apartmentFormData.availableDatesInput}
            onChange={handleDatesForm}
          />
        </div>
      </form>
    </div>
  );
};

export default PropertyInput;
