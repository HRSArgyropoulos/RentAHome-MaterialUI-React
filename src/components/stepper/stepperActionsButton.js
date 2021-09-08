const checkStepperData = (step, data) => {
  switch (step) {
    case 0:
      // block step if both empty or (id wrong and name field empty)
      if (
        (!data.hostId && !data.hostName) ||
        (data.hostId && !data.hostFound && !data.hostName)
      )
        return false;
      break;
    case 1:
      console.log('2nd step');
      break;
    default:
  }
  return true;
};

module.exports = { checkStepperData };
