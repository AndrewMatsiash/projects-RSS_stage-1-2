
export const updateStateGarage = async () => {
  const { items, count } = await getCars(globalState.garagePage);
  globalState.cars = items;
  globalState.carsCount = count;

  if (globalState.garagePage * 7 < globalState.carsCount) {
    document.getElementById('next-btn').disabled = false;
  } else {
    document.getElementById('next-btn').disabled = true
  }
  if (globalState.garagePage > 1) {
    document.getElementById('prev-btn').disabled = false;
  } else {
    document.getElementById('prev-btn').disabled = true;
  };
