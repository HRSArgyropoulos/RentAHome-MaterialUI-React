import { React, useEffect } from 'react';
import useStore from '../../store';
import { addHost } from '../../services/hosts';

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
  return <div></div>;
};

export default PropertyInput;
