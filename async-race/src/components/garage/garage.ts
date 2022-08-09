import { ICar } from '../../types/type';
import { renderCar } from '../car/car';
import globalState from '../globalState';

export const renderGarage = ():string => `<h1>Garage(${globalState.carsCount})</h1>
    <h2>Page${globalState.garagePage}</h2>
    <ul class="garage">
    ${globalState.cars.map((car:ICar) => `<li>${renderCar(car)}</li>`).join('')}
  </ul>`;
