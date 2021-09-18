import React from 'react';
import { PropagateLoader } from 'react-spinners';

const LoadingSpinner = ({ state }) => {
  return (
    <div>
      {state === 'loading' && (
        <div>
          <h2>
            Please wait while we find the best apartments for you.
          </h2>
          <PropagateLoader color="#37185a" loading={true} />
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
