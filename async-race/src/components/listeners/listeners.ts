import { getCars } from '../../request/getCars';
import { globalState } from '../globalState';
import { raceAll, startDriving, stopDriving } from '../utils/utils';
import { displayGarage, displayWinners } from './listenerMenu';
import {
  listenerFormBtnCreate,
  listenerFormBtnRemove,
  listenerFormBtnUpdate,
} from './listenersForm';
import { listenerGarageSelectBtn } from './listenersGarage';
import { listenerNextBtn, listenerPrevBtn } from './listenersPagination';
import { generationCarsBtn } from './listenersRaceControl';

export const listen = (): void => {
  document.body.addEventListener('click', async (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (event.target.classList.contains('race-btn')) {
        raceAll();
      }

      if (event.target.classList.contains('reset-btn')) {
        const { items } = await getCars(globalState.garagePage);
        const idxes: number[] = items.map((elem) => elem.id) as number[];
        for (let i = 0; i < idxes.length; i++) {
          stopDriving(idxes[i]);
        }
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
        listenerNextBtn(event);
      }
      if (event.target.classList.contains('prev-btn')) {
        listenerPrevBtn(event);
      }
    }
  });
};
  // const resetBtn = document.querySelector('.reset-btn') as HTMLButtonElement;
// const getWinnerRace = async (arr) => {
//   const carsRace = await Promise.race(arr);
//   // carsRace.filter((car) => car.success);
//   console.log(carsRace);

//   // const sortCarsByTime = a.sort((a, b) => a.time - b.time);
//   // console.log(sortCarsByTime);

//   // const getWinnerCar = await getCar(winnerCar.id);
//   // const massage = document.getElementById('massage') as HTMLDivElement;
//   // massage.classList.add('active')
//   // massage.innerText = `wins ${getWinnerCar.name}`;
// };
//           // getWinnerRace(arr);
