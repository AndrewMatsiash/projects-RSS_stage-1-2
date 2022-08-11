import { ICar } from '../types/type';

export const deleteWinner = async (id: number): Promise<ICar> => (
  await fetch(`http://127.0.0.1:3000/winners/${id}`, { method: 'DELETE' })
).json();
