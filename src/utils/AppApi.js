import axios from 'axios';

const apiPort = '7029';
const ip = '192.168.21.135';
const BASE_URL_LOCAL = `https://${ip}:${apiPort}/api`;

const apiClient = axios.create({
  baseURL: BASE_URL_LOCAL
});