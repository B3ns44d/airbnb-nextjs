import axios from 'axios';
import { ENDPOINTS } from 'shared/constants';

export const api = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
});
