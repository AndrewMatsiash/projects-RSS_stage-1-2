import { renderCar } from "../car/car";

export const renderGarage = () => `<h1>Garage(${globalState.carsCount})</h1>
    <h2>Page 1</h2>
    <ul class="garage" >
    ${globalState.cars.map((car) => `<li>${renderCar(car)}</li>`).join('')}
  </ul>`;
