import { createCar } from '../../request/createCar';
import { deleteCar } from '../../request/deletCar';
import { updateCar } from '../../request/updateCar';
import { ICar } from '../../types/type';
import { renderGarage } from '../garage/garage';
import { updateStateGarage } from '../garage/updateGarage';
import { getDateOfForm } from '../utils/utils';

export const listenerFormBtnCreate = async (): Promise<void> => {
  await createCar(getDateOfForm('create') as ICar);
  await updateStateGarage();
  const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
  ROOT_GARAGE.innerHTML = renderGarage();
};

export const listenerFormBtnRemove = async (event:Event): Promise<void> => {
  if (event.target instanceof Element) {
    const idCar: number = +event.target.id.split('remove-car-')[1];
    await deleteCar(idCar);
    await updateStateGarage();
    const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
    ROOT_GARAGE.innerHTML = renderGarage();
  }
};

export const listenerFormBtnUpdate = async ():Promise<void> => {
  const formUpdate = document.getElementById(('update-name')) as HTMLFormElement;
  const formUpdateColor = document.getElementById('update-color') as HTMLFormElement;
  const formUpdateBtn = document.getElementById('update-btn') as HTMLFormElement;

  const idCar = formUpdate.dataset.id;
  await updateCar(getDateOfForm('update'), Number(idCar));
  await updateStateGarage();
  const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
  ROOT_GARAGE.innerHTML = renderGarage();
  formUpdate.disabled = true;
  formUpdateColor.disabled = true;
  formUpdateBtn.disabled = true;
};
