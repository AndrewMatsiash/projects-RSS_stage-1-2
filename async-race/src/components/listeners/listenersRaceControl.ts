import { createCar } from '../../request/createCar';
import { ICar } from '../../types/type';
import { renderGarage } from '../garage/garage';
import { updateStateGarage } from '../garage/updateGarage';
import { generateRandomCars } from '../utils/utils';

export const generationCarsBtn = async (): Promise<void> => {
  const cars = generateRandomCars();
  await Promise.all(cars.map(async (car) => createCar(car as ICar)));
  await updateStateGarage();
  const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
  ROOT_GARAGE.innerHTML = renderGarage();
};
