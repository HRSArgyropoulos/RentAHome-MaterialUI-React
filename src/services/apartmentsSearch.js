import axios from 'axios';

const getApartments = async (
  location,
  checkIn,
  checkOut,
  persons
) => {
  return await axios.get(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/booking/apartments`,
    {
      params: { location, checkIn, checkOut, persons },
    }
  );
};

export default getApartments;
