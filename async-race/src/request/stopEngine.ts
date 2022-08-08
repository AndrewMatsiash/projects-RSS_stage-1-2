import { engine } from './rootRequest';

const stopEngine = async (id: number) => (await fetch(`${engine}?id=${id}$status=stopped`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
})).json();
