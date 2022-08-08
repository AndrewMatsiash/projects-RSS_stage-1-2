import { getCars } from '../../request/getCars';
import { renderGarage } from '../garage/garage';
import { updateStateGarage } from '../garage/updateGarage';
import globalState from '../globalState';

export const listenerNextBtn = async function (event: Event) {
  if (event.target instanceof Element) {
    globalState.garagePage += 1;
    const carsPage = await getCars(globalState.garagePage);
    await updateStateGarage();
    const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
    ROOT_GARAGE.innerHTML = renderGarage();
  }
};

export const listenerPrevBtn = async function (event: Event) {
  if (event.target instanceof Element) {
    globalState.garagePage -= 1;
    console.log(globalState.garagePage);

    const carsPage = await getCars(globalState.garagePage);
    await updateStateGarage();
    const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
    ROOT_GARAGE.innerHTML = renderGarage();
  }
};
