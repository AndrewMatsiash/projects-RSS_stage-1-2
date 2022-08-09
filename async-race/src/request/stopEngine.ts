import { engine } from './rootRequest';

export const stopEngine = async (id: number): Promise<{ velocity: number, distance: number }> => (
  await fetch(`${engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
