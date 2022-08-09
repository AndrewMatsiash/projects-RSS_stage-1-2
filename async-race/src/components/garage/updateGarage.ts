import { getCars } from '../../request/getCars';
import globalState from '../globalState';

export const updateStateGarage = async (): Promise<void> => {
  const { items, count } = await getCars(globalState.garagePage);
  globalState.cars = items;
  globalState.carsCount = count;

  if (globalState.garagePage * 7 < Number(globalState.carsCount)) {
    const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
    nextBtn.disabled = false;
  } else {
    const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
    nextBtn.disabled = true;
  }
  if (globalState.garagePage > 1) {
    const nextBtn = document.getElementById('prev-btn') as HTMLButtonElement;
    nextBtn.disabled = false;
  } else {
    const nextBtn = document.getElementById('prev-btn') as HTMLButtonElement;
    nextBtn.disabled = true;
  }
};
