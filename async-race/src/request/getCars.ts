import { ICar } from '../types/type';
import { garage } from './rootRequest';

export const getCars = async (page: number, limit = 7):Promise<{ items: ICar[], count:string | null }> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
