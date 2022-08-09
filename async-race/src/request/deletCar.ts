import { ICar } from '../types/type';
import { garage } from './rootRequest';

export const deleteCar = async (id:number): Promise<ICar[]> => {
  const resDelCar = await fetch(`${garage}/${id}`, { method: 'DELETE' });
  const delCar = await resDelCar.json();
  return delCar;
};
