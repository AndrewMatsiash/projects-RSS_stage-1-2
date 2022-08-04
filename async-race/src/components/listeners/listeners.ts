import { createCar } from "../../request/createCar";
import { deleteCar } from "../../request/deletCar";
import { getCar } from "../../request/getCar";
import { getCars } from "../../request/getCars";
import { updateCar } from "../../request/updateCar";
import { renderGarage } from "../garage/garage";
import { updateStateGarage } from "../garage/updateGarage";
import globalState from "../globalState";
import { listenerFormBtnCreate, listenerFormBtnRemove, listenerFormBtnUpdate } from "./listenersForm";
import { listenerGarageSelectBtn } from "./listenersGarage";
import { listenerNextBtn } from "./listenersPagination";





export const listen = () => {
  document.body.addEventListener('click', async (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (event.target.classList.contains("create-btn")) {
        listenerFormBtnCreate()
      }
      if (event.target.classList.contains("remove-btn")) {
        listenerFormBtnRemove(event)
      }
      if (event.target.classList.contains("select-btn")) {
        listenerGarageSelectBtn(event)
      }
      if (event.target.classList.contains("update-btn")) {
        listenerFormBtnUpdate(event)
      }
      if (event.target.classList.contains("next-btn")) {
        listenerNextBtn(event)
      }
      if (event.target.classList.contains("prev-btn")) {
        listenerNextBtn(event)
      }
    }
  })
}
