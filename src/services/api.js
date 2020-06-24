import axios from 'axios';

const IP_ADDRESS = 'http://hospitalveterinariotaquaral.web7029.uni5.net/api';
// const IP_EMULADOR_IOS = 'http://10.200.3.191:3333';

const api = axios.create({
  baseURL: IP_ADDRESS,
});

export default api;
