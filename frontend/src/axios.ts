import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://klrplate.sourabhsharma181003.workers.dev'
});

export default instance;