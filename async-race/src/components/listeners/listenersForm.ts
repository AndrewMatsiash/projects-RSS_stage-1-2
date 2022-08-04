import { createCar } from "../../request/createCar";
import { deleteCar } from "../../request/deletCar";
import { updateCar } from "../../request/updateCar";
import { renderGarage } from "../garage/garage";
import { updateStateGarage } from "../garage/updateGarage";



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

export const listenerFormBtnCreate = async function (){
  await createCar(getDateOfForm('create') as ICar)
  await updateStateGarage()
  const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
  ROOT_GARAGE.innerHTML = renderGarage()
}

export const listenerFormBtnRemove = async function (event:Event){
  if (event.target instanceof Element) {
  const idCar: number = +event.target.id.split('remove-car-')[1]
  await deleteCar(idCar)
  await updateStateGarage()
  const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
  ROOT_GARAGE.innerHTML = renderGarage()

  }

}
export const listenerFormBtnUpdate = async function (event:Event){
  const formUpdate = document.getElementById(('update-name')) as HTMLFormElement
  let idCar = formUpdate.dataset.id
  await updateCar(getDateOfForm('update'), Number(idCar))
  await updateStateGarage()
  const ROOT_GARAGE = document.querySelector('.garage-wrapper') as HTMLElement;
  ROOT_GARAGE.innerHTML = renderGarage()

  }


