export const getDateOfForm = (id: string) => {
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
  'Acura', 'Alfa Romeo', 'Alpine', 'Apollo', 'Apple', 'Aston Martin', 'Audi', 'Automobili Pininfarina', 'Bentley', 'BMW', 'Bollinger',
  'Brilliance', 'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Chana', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Continental', 'CUPRA',
  'Dacia', 'Daewoo', 'Daihatsu', 'Datsun', 'Detroit Electric', 'Dodge', 'DS Automobiles', 'FAW', 'Ferrari', 'Fiat', 'Fisker', 'Ford',
  'Foxtron', 'Geely', 'Genesis', 'GMC', 'Great Wall', 'Haval', 'Honda', 'Hummer', 'Hyundai', 'Ineos', 'Infiniti', 'Iran Khodro', 'JAC',
  'Jaguar', 'Jeep', 'JETOUR', 'KIA', 'Koenigsegg', 'Lada', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lifan', 'Lincoln', 'Lordstown',
  'Lotus', 'Lucid', 'LvChi', 'Lynk & Co', 'Maserati', 'Maybach', 'Mazda', 'MCLaren', 'Mercedes-Benz', 'MG', 'MINI', 'Mitsubishi', 'Nikola',
  'NIO', 'Nissan', 'Opel', 'Pagani', 'Peugeot', 'Polestar', 'Porsche', 'Qoros', 'Range Rover', 'Ravon', 'Renault', 'Rimac', 'Rivian',
  'Rolls-Royce', 'Saab', 'Saipa', 'SEAT', 'Skoda', 'smart', 'SsangYong', 'SSC North America', 'Stellantis', 'Subaru', 'Suzuki', 'Tata',
  'Tesla', 'Torsus', 'Toyota', 'VinFast', 'Volkswagen', 'Volvo', 'Xpeng', 'Zotye',
];
const carModal = [
  'Durango', 'Ram', 'Challenger', 'Charger', 'Grand Caravan', 'X7', 'X5', 'X3', 'X6 M', 'X6', 'X1', 'X4', 'C3 Aircross', 'C5 Aircross', 'Duster', 'CR-V', 'Corolla',
  'C4 Cactus', 'DS3 Crossback', 'C1', 'C3', 'Berlingo Multispace', 'DS4 Crossback', 'UX 250h', 'NX 300h', 'LC 500', 'RX 350/200t', 'Rapid', 'Largus',
  'IS 200t', 'LS 500h', 'RX', 'ES 200/250/350', 'Hatchback', 'CX-5', 'Sedan', 'CX-30', 'CX-9', 'CX-3', 'MX-5 Roadster', 'Phantom', 'Camry', 'Polo',
  'Cullinan', 'Ghost', 'Dawn', 'Duster', 'Arkana', 'Sandero', 'Logan', 'Trafic Fourgon', 'Logan MCV', 'Captur', 'Kadjar', 'RAV4', 'Rio', 'Creta', 'Solaris',
];

const getRandomName = function () {
  const name = carBrand[Math.floor(Math.random() * carBrand.length)];
  const model = carModal[Math.floor(Math.random() * carModal.length)];
  return `${name}${model}`;
};
const getRandomColor = function () {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export const generateRandomCars = () => new Array(100).fill(1).map((el) => ({ name: getRandomName(), color: getRandomColor() }));

// export function getDistanceBetweenElements(a, b) {
//   const aPosition = getPositionAtCenter(a);
//   const Position = getPositionAtCenter(b);
//   return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y)
// }

// const startDriving = async (id) => {
//   const startButton = document.getElementById(`start-engine-car-${id}`);
//   startButton.disabled = true;
//   startButton.classList.toggle('enabling', true);
//   const { velocity, distance } = await startEngine(id);
//   const time = Math.round(distance / velocity);

//   startButton.classList.toggle('enabling', false);
//   document.getElementById(`stop-engine-car-${id}`).disabled = false

//   const car = document.getElementById(`car-${id}`);
//   const flag = document.getElementById(`flag-${id}` );
//   const htmlDistance = Math.floor(getDistanceBetweenElements(car,flag)) + 100;
//   store.animationId = animation(car, htmlDistance, time) :
//   const { success } = await drive(id);
//   if (!success) window.cancelAnimationFrame(store.animation[id].id);
//   return { success, id, time }:
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
