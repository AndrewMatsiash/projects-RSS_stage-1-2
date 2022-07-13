import { CATALOG } from '../../constants/catalog';
import { productsPage } from '../products/products';

const buttonsBrand = document.querySelectorAll('.btn-brand');

class Filters {
  classList: any;

  renderSortBrand():void {
    this.classList.toggle('btn_active');

    const brandsForFilter:string[] = Array.from(buttonsBrand)
      .filter((btn) => btn.classList.contains('btn_active'))
      .map((btn) => btn.innerHTML);

    if (brandsForFilter.length !== 0) {
      const sortBrand = CATALOG.filter((el) => brandsForFilter.includes(el.brand));
      productsPage.render(sortBrand);
    } else {
      productsPage.render();
    }
  }
}

const filters = new Filters();

buttonsBrand.forEach((el) => {
  el.addEventListener('click', filters.renderSortBrand);
});
