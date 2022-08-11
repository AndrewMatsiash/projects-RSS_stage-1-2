import { ICar, IWinners } from '../types/type';
import { winners } from './rootRequest';

export const createWinner = async (body:IWinners): Promise<IWinners> => (
  await fetch(`${winners}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();
