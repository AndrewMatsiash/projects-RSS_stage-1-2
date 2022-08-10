import { getCars } from '../request/getCars';
import { getWinners } from '../request/getWinners';
import { IglobalState } from '../types/type';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1);

export const globalState:IglobalState = {
  garagePage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  animation: {},
  winners,
  winnersCount,
};
