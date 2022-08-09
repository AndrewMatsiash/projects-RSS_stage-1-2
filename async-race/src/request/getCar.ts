import { ICar } from '../types/type';
import { garage } from './rootRequest';

export const getCar = async (id: number):Promise<ICar> => {
  const res = await fetch(`${garage}/${id}`);
  const car = await res.json();
  return car;
};
