import { createWinner } from '../../request/createWinner';
import { drive } from '../../request/driveEngine';
import { getCar } from '../../request/getCar';
import { getCars } from '../../request/getCars';
import { startEngine } from '../../request/startEngine';
import { stopEngine } from '../../request/stopEngine';
import { State } from '../../types/type';
import { globalState } from '../globalState';
import { updateWinnerState } from '../winners/updateWinner';

export const getDateOfForm = (id: string): { name: FormDataEntryValue | null, color: FormDataEntryValue | null } => {
  const form = document.getElementById(`${id}`) as HTMLFormElement;
  form?.addEventListener('submit', (ev) => ev.preventDefault());
  const formData = new FormData(form);
  const car = {
    name: formData.get('name'),
    color: formData.get('color'),
  };
  return car;
};

const carBrand = [
  'Acura',
  'Alfa Romeo',
  'Alpine',
  'Apollo',
  'Apple',
  'Aston Martin',
  'Audi',
  'Automobili Pininfarina',
  'Bentley',
  'BMW',
  'Bollinger',
  'Brilliance',
  'Bugatti',
  'Buick',
  'BYD',
  'Cadillac',
  'Chana',
  'Chery',
  'Chevrolet',
  'Chrysler',
  'Citroen',
  'Continental',
  'CUPRA',
  'Dacia',
  'Daewoo',
  'Daihatsu',
  'Datsun',
  'Detroit Electric',
  'Dodge',
  'DS Automobiles',
  'FAW',
  'Ferrari',
  'Fiat',
  'Fisker',
  'Ford',
  'Foxtron',
  'Geely',
  'Genesis',
  'GMC',
  'Great Wall',
  'Haval',
  'Honda',
  'Hummer',
  'Hyundai',
  'Ineos',
  'Infiniti',
  'Iran Khodro',
  'JAC',
  'Jaguar',
  'Jeep',
  'JETOUR',
  'KIA',
  'Koenigsegg',
  'Lada',
  'Lamborghini',
  'Lancia',
  'Land Rover',
  'Lexus',
  'Lifan',
  'Lincoln',
  'Lordstown',
  'Lotus',
  'Lucid',
  'LvChi',
  'Lynk & Co',
  'Maserati',
  'Maybach',
  'Mazda',
  'MCLaren',
  'Mercedes-Benz',
  'MG',
  'MINI',
  'Mitsubishi',
  'Nikola',
  'NIO',
  'Nissan',
  'Opel',
  'Pagani',
  'Peugeot',
  'Polestar',
  'Porsche',
  'Qoros',
  'Range Rover',
  'Ravon',
  'Renault',
  'Rimac',
  'Rivian',
  'Rolls-Royce',
  'Saab',
  'Saipa',
  'SEAT',
  'Skoda',
  'smart',
  'SsangYong',
  'SSC North America',
  'Stellantis',
  'Subaru',
  'Suzuki',
  'Tata',
  'Tesla',
  'Torsus',
  'Toyota',
  'VinFast',
  'Volkswagen',
  'Volvo',
  'Xpeng',
  'Zotye',
];
const carModal = [
  'Durango',
  'Ram',
  'Challenger',
  'Charger',
  'Grand Caravan',
  'X7',
  'X5',
  'X3',
  'X6 M',
  'X6',
  'X1',
  'X4',
  'C3 Aircross',
  'C5 Aircross',
  'Duster',
  'CR-V',
  'Corolla',
  'C4 Cactus',
  'DS3 Crossback',
  'C1',
  'C3',
  'Berlingo Multispace',
  'DS4 Crossback',
  'UX 250h',
  'NX 300h',
  'LC 500',
  'RX 350/200t',
  'Rapid',
  'Largus',
  'IS 200t',
  'LS 500h',
  'RX',
  'ES 200/250/350',
  'Hatchback',
  'CX-5',
  'Sedan',
  'CX-30',
  'CX-9',
  'CX-3',
  'MX-5 Roadster',
  'Phantom',
  'Camry',
  'Polo',
  'Cullinan',
  'Ghost',
  'Dawn',
  'Duster',
  'Arkana',
  'Sandero',
  'Logan',
  'Trafic Fourgon',
  'Logan MCV',
  'Captur',
  'Kadjar',
  'RAV4',
  'Rio',
  'Creta',
  'Solaris',
];

const getRandomName = (): string => {
  const name = carBrand[Math.floor(Math.random() * carBrand.length)];
  const model = carModal[Math.floor(Math.random() * carModal.length)];
  return `${name}${model}`;
};
const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export const generateRandomCars = (): { name: string; color: string }[] => new Array(100)
  .fill(1)
  .map(() => ({ name: getRandomName(), color: getRandomColor() }));

export function animation(car: HTMLElement, distance: number, animationTime: number): State {
  let start = 0;
  const state: State = {};
  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));
    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);

  return state;
}

export const startDriving = async (id: number): Promise<{ success: boolean | undefined; id: number; time: number }> => {
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const road = document.querySelector('.road') as HTMLElement;
  const flag = document.querySelector('.flag') as HTMLElement;
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  const startButton = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  startButton.disabled = true;

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);
  const htmlDistance = road.offsetWidth - car.offsetWidth - flag.offsetWidth + 200;

  globalState.animation[id] = animation(car, htmlDistance, time);

  const { success } = await drive(id);

  if (!success) window.cancelAnimationFrame(globalState.animation[id].id);
  stopBtn.disabled = false;
  return { success, id, time };
};

export const stopDriving = async (id: number): Promise<void> => {
  const stopButton = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  const startButton = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const stopRes = await stopEngine(id);
  if (stopRes) {
    window.cancelAnimationFrame(globalState.animation[id]);
    car.style.transform = 'translateX(0px)';
  }
  stopButton.disabled = true;
  startButton.disabled = false;
};

export const raceAll = async (): Promise<void> => {
  const massage = document.getElementById('massage') as HTMLDivElement;
  const { items } = await getCars(globalState.garagePage);
  const idCarsArr: number[] = items.map((elem) => elem.id) as number[];
  const arrPromisesRace = [];

  for (let i = 0; i < idCarsArr.length; i++) {
    const carStart = startDriving(idCarsArr[i]);
    arrPromisesRace.push(carStart);
  }
  const dataCarsRaceArr = await Promise.all(arrPromisesRace);
  const winner = dataCarsRaceArr.filter((el) => el.success).sort((a, b) => a.time - b.time)[0];
  const winnerRace = await getCar(winner.id);
  massage.classList.add('active');
  massage.innerText = `wins ${winnerRace.name}, time ${winner.time / 1000} sec`;
  await createWinner({ id: winner.id, wins: 1, time: winner.time / 1000 });
  await updateWinnerState();
};

export const resetAll = async (): Promise<void> => {
  const massage = document.getElementById('massage') as HTMLDivElement;
  const { items } = await getCars(globalState.garagePage);
  const idCarsArr: number[] = items.map((elem) => elem.id) as number[];
  for (let i = 0; i < idCarsArr.length; i++) {
    stopDriving(idCarsArr[i]);
  }
  massage.classList.add('active');
  massage.innerText = '';
};
