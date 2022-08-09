import { Iwinner } from '../types/type';
import { winners } from './rootRequest';

export const getWinners = async (page: number, limit = 10): Promise<{ items: Iwinner[], count: string | null }> => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
