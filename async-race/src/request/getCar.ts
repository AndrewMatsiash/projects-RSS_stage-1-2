import { garage } from './rootRequest';

export const getCar = async (id: number) => {
  const res = await fetch(`${garage}/${id}`);
  const car = await res.json();
  return car;
};
