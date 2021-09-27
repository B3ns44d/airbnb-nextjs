import { api } from 'service/httpService';
import { ENDPOINTS } from 'shared/constants';

export const query = async ({ method, url }) => {
  try {
    const res = await api
      .request({
        method,
        url: `${ENDPOINTS.BASE_URL}/${url}`,
        json: true,
      })
      .catch((error) => {
        throw new Error(error.message);
      });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
