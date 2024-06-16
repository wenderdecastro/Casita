import axios from 'axios';

const ip = '192.168.21.135';

const apiPort = '5282';

const BASE_URL_LOCAL = `http://${ip}:${apiPort}/api`;

export const DeleteTaskPath = '/Task'
export const GetTasksPath = '/TaskList/home'
export const PostTaskPath = '/Task'
export const EditTaskPath = '/Task'
export const ConcludeTaskPath = '/Task/conclude'
export const MyDayTaskPath = '/Task/myday'
export const PostLoginPath = '/Login';
export const UserPath = '/User'
export async function postUser(userDetails) {
  try {
    const response = await api.post('/User', userDetails);
    return response.data;
  } catch (error) {
    console.error('Erro ao postar usuário:', error);
    throw error;
  }
}

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
  baseURL: BASE_URL_LOCAL,
    timeout: 10000
});

export default api;
