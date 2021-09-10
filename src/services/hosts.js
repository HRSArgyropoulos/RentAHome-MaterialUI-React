import axios from 'axios';

const hostBaseUrl = `${process.env.REACT_APP_SERVER_DOMAIN}/api/host/hosts`;

const getHost = async (hostId) => {
  return await axios.get(`${hostBaseUrl}/getHost`, {
    params: { hostId },
  });
};

const addHost = async (hostName) => {
  return await axios.post(`${hostBaseUrl}/addHost`, {
    hostName,
  });
};

export { getHost, addHost };
