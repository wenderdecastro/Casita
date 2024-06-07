import axios from 'axios';

const ip = '192.168.21.135'; 

const apiPort = '5282';

const BASE_URL_LOCAL = `http://${ip}:${apiPort}/api`;

export const DeleteTaskPath = '/Task'
export const PostTaskPath = '/Task'
export const EditTaskPath = '/Task'
export const ConcludeTaskPath = '/Task/conclude'
export const MyDayTaskPath = '/Task/myday'
export const PostLoginPath = '/Login';

const api = axios.create({
  baseURL: BASE_URL_LOCAL
});

export default api;
