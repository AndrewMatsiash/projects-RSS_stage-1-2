import { getCar } from '../../request/getCar';

export const listenerGarageSelectBtn = async (event: Event):Promise<void> => {
  if (event.target instanceof Element) {
    const idCar: number = +event.target.id.split('select-car-')[1];
    const selectedCar = await getCar(idCar);

    const formUpdate = document.getElementById(('update-name')) as HTMLFormElement;
    const formUpdateColor = document.getElementById('update-color') as HTMLFormElement;
    const formUpdateBtn = document.getElementById('update-btn') as HTMLFormElement;

    formUpdate.setAttribute('data-id', idCar.toString());
    formUpdate.value = selectedCar.name;
    formUpdateColor.value = selectedCar.color;
    formUpdate.disabled = false;
    formUpdateColor.disabled = false;
    formUpdateBtn.disabled = false;
  }
};
