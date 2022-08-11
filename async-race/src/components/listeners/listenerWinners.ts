import { globalState } from '../globalState';
import { updateWinnerState } from '../winners/updateWinner';
import { renderWinners } from '../winners/winners';

export const renderSortedView = async (sortBy: string): Promise<void> => {
  globalState.order = globalState.order === 'asc' ? 'desc' : 'asc';
  globalState.sort = sortBy;
  await updateWinnerState();
  const winners = document.querySelector('.winners');
  if (winners instanceof HTMLElement) {
    winners.innerHTML = renderWinners();
  }
};
