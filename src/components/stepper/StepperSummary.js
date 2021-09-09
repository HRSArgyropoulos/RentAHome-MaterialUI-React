import React from 'react';
import useStore from '../../store';

const StepperSummary = () => {
  const formData = useStore((state) => state.hostStepperForm);
  const step = useStore((state) => state.hostStepper);

  return (
    <div>
      {step > 0 && <h3>Summary</h3>}
      {step > 0 && (
        <>
          <h4>Host</h4>
          <ul>
            <li>ID: {formData.hostId}</li>
            <li>Name: {formData.hostName}</li>
          </ul>
        </>
      )}
      {step > 1 && (
        <>
          <h4>Property</h4>
        </>
      )}
    </div>
  );
};

export default StepperSummary;
