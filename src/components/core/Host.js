import { React } from 'react';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useStore from '../../store';
import StepperFormContent from '../StepperFormContent';
import { checkStepperData } from '../stepper/stepperActionsButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const stepLabels = [
  'Input host details',
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

  const hostStepperForm = useStore((state) => state.hostStepperForm);

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
            <h3>All steps completed</h3>
            <Button
              onClick={resetStepper}
              variant="outlined"
              color="primary">
              List another property
            </Button>
          </div>
        ) : (
          <div>
            <StepperFormContent index={activeStep} />
            <Button disabled={!activeStep} onClick={backStep}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                // button does validation depending on the step we currently at
                // if ok go to next step (index)
                if (checkStepperData(activeStep, hostStepperForm))
                  nextStep();
              }}>
              {activeStep < stepLabels.length - 1 ? 'Next' : 'Finish'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Host;
