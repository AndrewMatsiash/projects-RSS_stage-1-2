import {
  raceAll, resetAll, startDriving, stopDriving,
} from '../utils/utils';
import { displayGarage, displayWinners } from './listenerMenu';
import { listenerFormBtnCreate, listenerFormBtnRemove, listenerFormBtnUpdate } from './listenersForm';
import { listenerGarageSelectBtn } from './listenersGarage';
import { listenerNextBtn, listenerPrevBtn } from './listenersPagination';
import { generationCarsBtn } from './listenersRaceControl';
import { renderSortedView } from './listenerWinners';

export const listen = (): void => {
  document.body.addEventListener('click', async (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (event.target.classList.contains('race-btn')) {
        const resetBtn = document.querySelector('.reset-btn') as HTMLButtonElement;
        resetBtn.disabled = true;
        await raceAll();
        resetBtn.disabled = false;
      }

      if (event.target.classList.contains('reset-btn')) {
        resetAll();
      }
      if (event.target.classList.contains('start-engine-btn')) {
        const id = +event.target.id.split('start-engine-car-')[1];
        startDriving(id);
      }
      if (event.target.classList.contains('stop-engine-btn')) {
        const id = +event.target.id.split('stop-engine-car-')[1];
        stopDriving(id);
      }
      if (event.target.classList.contains('generation-btn')) {
        generationCarsBtn();
      }
      if (event.target.classList.contains('garage-menu-btn')) {
        displayGarage();
      }
      if (event.target.classList.contains('winners-menu-btn')) {
        displayWinners();
      }
      if (event.target.classList.contains('create-btn')) {
        listenerFormBtnCreate();
      }
      if (event.target.classList.contains('remove-btn')) {
        listenerFormBtnRemove(event);
      }
      if (event.target.classList.contains('select-btn')) {
        listenerGarageSelectBtn(event);
      }
      if (event.target.classList.contains('update-btn')) {
        listenerFormBtnUpdate();
      }
      if (event.target.classList.contains('next-btn')) {
        listenerNextBtn();
      }
      if (event.target.classList.contains('prev-btn')) {
        listenerPrevBtn();
      }
      if (event.target.classList.contains('time')) {
        renderSortedView('time');
      }
      if (event.target.classList.contains('winners')) {
        renderSortedView('wins');
      }
      if (event.target.classList.contains('id')) {
        renderSortedView('id');
      }
    }
  });
};
