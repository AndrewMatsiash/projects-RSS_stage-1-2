import { CATALOG } from '../../constants/catalog';
import { productsPage } from '../products/products';

class Filters {
  [x: string]: any;

  name = 'assas';

  constructor() {
    this.class = 'fdgk;sdgks';
  }

  renderSortBrand(el):void {
    const elementId:string = el.id;// присваиваю переменной id нажатой кнопки
    this.classList.toggle(elementId);// добавляю класс равный id по нажатию

    if (this.classList.contains(elementId)) { // если класс есть сортирую коталог товаров по значению
      const sortBrand = CATALOG.filter((el) => el.brand === elementId);
      productsPage.render(sortBrand);// рендер отсортированного массива с товарами на страницу
    } else {
      productsPage.render();// если класса нет то верни весь каталог
    }
  }
}

const filters = new Filters();

const buttonsBrand = document.querySelectorAll('.btn-brand');

buttonsBrand.forEach((el) => {
  el.addEventListener('click', filters.renderSortBrand);
});
