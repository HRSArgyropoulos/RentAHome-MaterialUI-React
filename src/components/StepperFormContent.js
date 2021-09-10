import React from 'react';
import HostInput from './stepper/HostInput';
import PropertyInput from './stepper/PropertyInput';
import StepperSummary from './stepper/StepperSummary';

const StepperFormContent = (props) => {
  const { index } = props;
  return (
    <>
      {index === 0 && <HostInput />}
      {index === 1 && <PropertyInput />}
      {index === 2 && <StepperSummary />}
    </>
  );
};

export default StepperFormContent;
