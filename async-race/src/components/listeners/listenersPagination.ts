import { renderGarage } from '../garage/garage';
import { updateStateGarage } from '../garage/updateGarage';
import { globalState } from '../globalState';
import { updateWinnerState } from '../winners/updateWinner';
import { renderWinners } from '../winners/winners';

export const listenerNextBtn = async (): Promise<void> => {
  const garage = document.querySelector('.garage-wrapper');
  const winners = document.querySelector('.winners');
  if (garage instanceof HTMLElement && winners instanceof HTMLElement) {
    if (garage.style.display === 'block') {
      if (globalState.garagePage * 7 < Number(globalState.carsCount)) {
        globalState.garagePage += 1;
        await updateStateGarage();
        garage.innerHTML = renderGarage();
      }
    } else if (globalState.winnersPage * 7 < Number(globalState.winnersCount)) {
      globalState.winnersPage += 1;
      await updateWinnerState();
      winners.innerHTML = renderWinners();
    }
  }
};

export const listenerPrevBtn = async ():Promise<void> => {
  const garage = document.querySelector('.garage-wrapper');
  const winners = document.querySelector('.winners');
  if (garage instanceof HTMLElement && winners instanceof HTMLElement) {
    if (garage.style.display === 'block') {
      if (globalState.garagePage > 1) {
        globalState.garagePage -= 1;
        await updateStateGarage();
        garage.innerHTML = renderGarage();
      }
    } else if (globalState.winnersPage > 1) {
      globalState.winnersPage -= 1;
      await updateWinnerState();
      winners.innerHTML = renderWinners();
    }
  }
};
