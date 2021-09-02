import { React, useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useStore from '../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const stepLabels = [
  'Select your location',
  'List property details',
  'Review and list',
];

const Host = () => {
  const classes = useStyles();

  // stepper index position and actions
  const activeStep = useStore((state) => state.hostStepper);
  const nextStep = useStore((state) => state.forwardsStepper);
  const backStep = useStore((state) => state.backwardsStepper);
  const resetStepper = useStore((state) => state.resetStepper);

  /* const moveStepper = useStore((state) => state.moveStepper); */

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === stepLabels.length ? (
          <div>
            'All steps completed'
            <Button
              onClick={resetStepper}
              variant="outlined"
              color="primary">
              List another property
            </Button>
          </div>
        ) : (
          <div>
            <Button disabled={!activeStep} onClick={backStep}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={nextStep}>
              {activeStep < stepLabels.length - 1 ? 'Next' : 'Finish'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Host;
