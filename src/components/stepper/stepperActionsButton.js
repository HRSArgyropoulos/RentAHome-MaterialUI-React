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
      // if any empty block step
      for (const property in data.apartment) {
        console.log(property, data.apartment[property]);
        if (!data.apartment[property]) {
          return false;
        }
        if (property === 'availableDates') {
          if (!data.apartment[property].length) return false;
        }
      }
      break;
    default:
  }
  return true;
};

module.exports = { checkStepperData };
