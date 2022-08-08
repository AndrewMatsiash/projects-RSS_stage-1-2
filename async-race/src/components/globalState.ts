import { getCars } from '../request/getCars';
import { getWinners } from '../request/getWinners';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1);

export default {
  garagePage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  animation: {},
  winners,
  winnersCount,
};
