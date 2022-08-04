import { createCar } from "../request/createCar";
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
    }
  }



