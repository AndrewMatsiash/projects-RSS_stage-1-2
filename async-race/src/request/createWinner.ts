import { IWinner, IWinners } from '../types/type';
import { winners } from './rootRequest';

export const createWinner = async (body:IWinner): Promise<IWinners> => (
  await fetch(`${winners}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();
