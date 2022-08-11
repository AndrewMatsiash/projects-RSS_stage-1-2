import { IGetWinners, IWinners } from '../types/type';
import { getCar } from './getCar';

const getSortOrder = (sort: string | undefined, order: string | undefined) => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

export const getWinners = async ({
  page,
  limit = 10,
  sort,
  order,
}: IGetWinners): Promise<{ items: IWinners[]; count: string | null }> => {
  const response = await fetch(
    `http://127.0.0.1:3000/winners?_page=${page}&_limit=${limit}${getSortOrder(
      sort,
      order,
    )}`,
  );
  const items = await response.json();

  return {
    items: await Promise.all(
      items.map(async (winner: IWinners) => ({
        ...winner,
        car: await getCar(winner.id),
      })),
    ),
    count: response.headers.get('X-Total-Count'),
  };
};
