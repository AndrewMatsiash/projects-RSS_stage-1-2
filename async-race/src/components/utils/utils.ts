import { drive } from '../../request/driveEngine';
import { startEngine } from '../../request/startEngine';
import { stopEngine } from '../../request/stopEngine';
import { State } from '../../types/type';
import globalState from '../globalState';

export const getDateOfForm = (id:string): { name: FormDataEntryValue | null, color: FormDataEntryValue | null } => {
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

// export function getDistanceBetweenElements(a, b) {
//   const aPosition = getPositionAtCenter(a);
//   const Position = getPositionAtCenter(b);
//   return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y)
// }

// export function animate(car, distance, time) {
//   let currentPosition = 0;

//   const stepCount = (time / 1000) * 60;
//   const step = distance / stepCount;

//   const tick = () => {
//     currentPosition += step;
//     car.style.transform = `translateX(${currentPosition}px)`;
//     if (currentPosition < distance) {
//         window.requestAnimationFrame(tick)
//     }

//   }
//   tick()
// }
export function animation(
  car: HTMLElement,
  distance: number,
  animationTime: number,
): State {
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

export const startDriving = async (
  id: number,
): Promise<{ success: boolean | undefined; id: number; time: number }> => {
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const road = document.querySelector('.road') as HTMLElement;
  const flag = document.querySelector('.flag') as HTMLElement;

  const startButton = document.getElementById(
    `start-engine-car-${id}`,
  ) as HTMLButtonElement;
  startButton.disabled = true;
  // startButton.classList.toggle('enabling', true);
  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);
  const htmlDistance = road.offsetWidth - car.offsetWidth - flag.offsetWidth + 200;
  // startButton.classList.toggle('enabling', false);
  const stopBtn = document.getElementById(
    `stop-engine-car-${id}`,
  ) as HTMLButtonElement;
  stopBtn.disabled = false;

  globalState.animation[id] = animation(car, htmlDistance, time);

  const { success } = await drive(id);

  if (!success) window.cancelAnimationFrame(globalState.animation[id].id);

  return { success, id, time };
};

export const stopDriving = async (id: number): Promise<void> => {
  const stopButton = document.getElementById(
    `stop-engine-car-${id}`,
  ) as HTMLButtonElement;
  const startButton = document.getElementById(
    `start-engine-car-${id}`,
  ) as HTMLButtonElement;
  stopButton.disabled = true;
  startButton.disabled = false;

  const stopRes = await stopEngine(id);
  if (stopRes) {
    window.cancelAnimationFrame(globalState.animation[id]);
    const car = document.getElementById(`car-${id}`) as HTMLElement;
    car.style.transform = 'translateX(0px)';
  }
};
