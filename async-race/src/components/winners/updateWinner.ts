import { getWinners } from '../../request/getWinners';
import { globalState } from '../globalState';

export const updateWinnerState = async (): Promise<void> => {
  const { items, count } = await getWinners({
    page: globalState.winnersPage,
    sort: globalState.sort,
    order: globalState.order,
  });
  globalState.winners = items;
  globalState.winnersCount = count;
};
