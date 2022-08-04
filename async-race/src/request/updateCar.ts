import { garage } from './rootRequest';

export const updateCar = async (body: any, id:number) => (await fetch(`${garage}/${id}`,
  {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json;
