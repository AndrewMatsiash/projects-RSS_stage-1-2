import { createCar } from "../request/createCar";
import { deleteCar } from "../request/deletCar";
import { getCar } from "../request/getCar";
import { renderGarage } from "./garage/garage";
import { updateStateGarage } from "./garage/updateGarage";



const getDateOfForm = (id: string) => {
  const form = document.getElementById(`${id}`) as HTMLFormElement
  form?.addEventListener('submit', ev => ev.preventDefault())
  const formData = new FormData(form);
  const car = {
    name: formData.get('name'),
    color: formData.get('color'),
  };
  return car
}



export const listen = () => {
  document.body.addEventListener('click', async (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (event.target.classList.contains("create-btn")) {
        await createCar(getDateOfForm('create'))
        await updateStateGarage()
        const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
        ROOT_GARAGE.innerHTML = renderGarage()
      }
      if (event.target.classList.contains("remove-btn")) {
        const idCar: number = +event.target.id.split('remove-car-')[1]
        await deleteCar(idCar)
        await updateStateGarage()
        const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
        ROOT_GARAGE.innerHTML = renderGarage()
      }
      if (event.target.classList.contains("select-btn")) {
        const idCar: number = +event.target.id.split('select-car-')[1]
        const selectedCar = await getCar(idCar)

        const formUpdate = document.getElementById(('update-name')) as HTMLFormElement
        const formUpdateColor = document.getElementById('update-color') as HTMLFormElement
        const formUpdateBtn = document.getElementById('update-btn') as HTMLFormElement
        formUpdate.setAttribute('data-id', idCar.toString())
        formUpdate.value = selectedCar.name;
        formUpdateColor.value = selectedCar.color;
        formUpdate.disabled = false;
        formUpdateColor.disabled = false;
        formUpdateBtn.disabled = false;
      }
    }
  })
}
