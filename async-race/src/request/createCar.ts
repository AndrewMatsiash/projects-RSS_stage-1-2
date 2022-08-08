import { garage } from './rootRequest';

export const createCar = async (body:ICar | null) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();
