import axios from 'axios';

const baseEndpoint = `${process.env.REACT_APP_SERVER_DOMAIN}/api/host/apartment`;

// add new apartment from form to db
const saveApartment = async (apartment, host) => {
  return await axios.post(`${baseEndpoint}/addApartment`, {
    apartment,
    host,
  });
};

export { saveApartment };
