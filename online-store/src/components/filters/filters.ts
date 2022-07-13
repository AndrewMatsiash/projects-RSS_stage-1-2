import { CATALOG } from '../../constants/catalog';
import { productsPage } from '../products/products';

const buttonsFilterBrand = document.querySelectorAll('.btn-brand');
const buttonsFilterColor = document.querySelectorAll('.btn-color');
const buttonsFilterCamaras = document.querySelectorAll('.btn-cameras');
const buttonsFilterPopular = document.querySelectorAll('.btn-popular');
const buttonsFilter = document.querySelectorAll('.btn-filter')


class Filters {
  classList: any;


  filters() {
    let catalog = CATALOG;
    this.classList.toggle('btn_active')

    let filterBrandArr = filters.filterValues(buttonsFilterBrand)
    let filterByCamerasArr = filters.filterValues(buttonsFilterCamaras)
    let filterByColorArr = filters.filterValues(buttonsFilterColor)
    let filterByPopular = filters.filterValues(buttonsFilterPopular)

    if (filterBrandArr.length !== 0) {
      catalog = catalog.filter((el) => filterBrandArr.includes(el.brand));
    }
    if (filterByColorArr.length !== 0) {
      catalog = catalog.filter((el) => filterByColorArr.includes(el.color));
    }
    if (filterByCamerasArr.length !== 0) {
      catalog = catalog.filter((el) => filterByCamerasArr.includes(el.numberOfCameras.toString()));
    }
    if (filterByPopular.length !== 0) {
      catalog = catalog.filter((el) => filterByPopular.includes(el.popular));
    }

    productsPage.render(catalog)
  }

  filterValues(buttonsFilter:NodeListOf<Element>) {
    const forFilter: string[] = Array.from(buttonsFilter)
      .filter((btn) => btn.classList.contains('btn_active'))
      .map((btn) => btn.innerHTML);
    return forFilter
  }

}

const filters = new Filters();

buttonsFilter.forEach((el) => {
  el.addEventListener('click', filters.filters);
});
