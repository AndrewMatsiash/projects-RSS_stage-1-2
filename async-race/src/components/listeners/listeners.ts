import { displayGarage, displayWinners } from './listenerMenu';
import { listenerFormBtnCreate, listenerFormBtnRemove, listenerFormBtnUpdate } from './listenersForm';
import { listenerGarageSelectBtn } from './listenersGarage';
import { listenerNextBtn, listenerPrevBtn } from './listenersPagination';
import { generationCarsBtn } from './listenersRaceControl';

export const listen = () => {
  document.body.addEventListener('click', async (event: MouseEvent) => {
    if (event.target instanceof Element) {
    //   if (event.target.classList.contains("start-engine-btn")) {

      //   }
      //   if (event.target.classList.contains("stop-engine-btn")) {
      //     const road = document.querySelector('.road')
      //     const car = document.querySelector('.car')
      //     car.style.transform = `translateX(0px)`;

      //   }
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
        listenerFormBtnUpdate(event);
      }
      if (event.target.classList.contains('next-btn')) {
        listenerNextBtn(event);
      }
      if (event.target.classList.contains('prev-btn')) {
        listenerPrevBtn(event);
      }
    }
  });
};
