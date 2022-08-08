import { engine } from './rootRequest';

export const startEngine = async (id:number) => (await fetch(`${engine}?id=${id}&status=started`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
})).json();
