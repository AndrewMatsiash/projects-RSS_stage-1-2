import { renderWinners } from '../winners/winners';

export const displayWinners = (): void => {
  const winners = document.querySelector('.winners') as HTMLElement;
  winners.innerHTML = renderWinners();
  const sectionGarage = document.querySelector('.garage-container') as HTMLElement;
  const sectionWinners = document.querySelector('.winners-container') as HTMLElement;
  sectionGarage.style.display = 'none';
  sectionWinners.style.display = 'block';
};

export const displayGarage = (): void => {
  const sectionGarage = document.querySelector('.garage-container') as HTMLElement;
  const sectionWinners = document.querySelector('.winners-container') as HTMLElement;
  sectionGarage.style.display = 'block';
  sectionWinners.style.display = 'none';
};
