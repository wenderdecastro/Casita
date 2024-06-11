import axios from 'axios';

const ip = '192.168.21.135';

const apiPort = '7029';

const BASE_URL_LOCAL = `http://${ip}:${apiPort}/api`;

export const DeleteTaskPath = '/Task'
export const PostTaskPath = '/Task'
export const EditTaskPath = '/Task'
export const ConcludeTaskPath = '/Task/conclude'
export const MyDayTaskPath = '/Task/myday'

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
  baseURL: BASE_URL_LOCAL,
    timeout: 10000
});


// api.interceptors.request.use(async (config) => {
//   const token = await AppStorage.read(AppStorageKeys.token)
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// },
//   (error) => Promise.reject(error)
// )

export default api;