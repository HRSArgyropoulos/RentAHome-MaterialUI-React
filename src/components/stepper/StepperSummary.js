import React from 'react';
import useStore from '../../store';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  property: {
    marginRight: '1rem',
  },
});

const StepperSummary = () => {
  const classes = useStyles();

  const formData = useStore((state) => state.hostStepperForm);
  const apartmentData = formData.apartment;
  const step = useStore((state) => state.hostStepper);

  // capitalize first letter helper for summary titles
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div>
      {step > 0 && <h3>Summary</h3>}
      {step > 0 && (
        <>
          <h4>Host</h4>
          <ul>
            <li>
              <span className={classes.property}>Id</span>
              <span>{formData.hostId}</span>
            </li>
            <li>
              <span>Name</span>
              <span>{formData.hostName}</span>
            </li>
          </ul>
        </>
      )}
      {step > 1 && (
        <>
          <h4>Property</h4>
          <ul>
            {Object.keys(apartmentData).map((property, index) => (
              <li key={index}>
                <span>{capitalizeFirstLetter(property)}</span>
                <span>{apartmentData[property]}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default StepperSummary;
