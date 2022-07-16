import { CATALOG } from '../../constants/catalog';
import { sliderDataRelease, sliderDataReleaseElement, sliderElementQuntity, sliderQuantity } from '../../utils/noSlider';
import { productsPage } from '../products/products';

const buttonsFilterBrand = document.querySelectorAll('.btn-brand');
const buttonsFilterColor = document.querySelectorAll('.btn-color');
const buttonsFilterCamaras = document.querySelectorAll('.btn-cameras');
const buttonsFilterPopular = document.querySelectorAll('.btn-popular');
const buttonsFilter = document.querySelectorAll('.btn-filter');
const inputSearch = document.querySelector('.search') as HTMLInputElement
const massage = document.querySelector('.massage')
const selectSort = document.querySelector('#select')






class Filters {
  classList: any;

  filters(): void {
    let catalog = CATALOG;

    const filterBrandArr = filters.filterValues(buttonsFilterBrand);
    const filterByCamerasArr = filters.filterValues(buttonsFilterCamaras);
    const filterByColorArr = filters.filterValues(buttonsFilterColor);
    const filterByPopular = filters.filterValues(buttonsFilterPopular);
    const sliderQuantityArr = sliderQuantity.get() as number[];
    const sliderDataReleaseArr = sliderDataRelease.get() as number[];
    const keys = ['name', 'brand', 'popular', 'color',]

    let selectValue = selectSort.value





    if (inputSearch.value !== "") {
      catalog = catalog.filter(el => {
        return keys.some((key) => {
          return el[key].toLowerCase().includes(inputSearch.value.toLowerCase())
        });
      });

      productsPage.render(catalog)
    }


    if (sliderQuantityArr[0] > 1 || sliderQuantityArr[1] < 12) {
      catalog = catalog.filter((el) => el.quantity >= sliderQuantityArr[0] && el.quantity <= sliderQuantityArr[1]);
      productsPage.render(catalog);
    }


    if (sliderDataReleaseArr[0] > 1 || sliderDataReleaseArr[1] < 12) {
      catalog = catalog.filter((el) => el.releaseDate >= sliderDataReleaseArr[0] && el.releaseDate <= sliderDataReleaseArr[1]);
      productsPage.render(catalog);
    }

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

    if (catalog.length === 0) {
      massage?.classList.add('active')
    }

    switch (selectValue) {
      case 'sortFromAtoЯ':
        catalog = catalog.sort((a, b) => {
          if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1
          if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1
          return 0
        });
        productsPage.render(catalog)
        break;
      case 'sortFromЯtoA':
        catalog = catalog.sort((a, b) => {
          if (b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()) return 1
          if (b.name.toLocaleLowerCase() < a.name.toLocaleLowerCase()) return -1
          return 0
        });
        productsPage.render(catalog)
        break
      case 'sortbyYearAscending':
        catalog = catalog.sort((a, b) => {
          if (a.releaseDate > b.releaseDate) return 1
          if (a.releaseDate < b.releaseDate) return -1
          return 0
        });
        productsPage.render(catalog)
        break
      case 'sortbyYearByAbbing':
        catalog = catalog.sort((a, b) => {
          if (b.releaseDate > a.releaseDate) return 1
          if (b.releaseDate < a.releaseDate) return -1
          return 0
        });
        productsPage.render(catalog)
        break

      case 'sortByNumberByAscending':
        catalog = catalog.sort((a, b) => {
          if (a.quantity > b.quantity) return 1
          if (a.quantity < b.quantity) return -1
          return 0
        });
        productsPage.render(catalog)
        break
      case 'sortByNumberByAbbing':
        catalog = catalog.sort((a, b) => {
          if (b.quantity > a.quantity) return 1
          if (b.quantity < a.quantity) return -1
          return 0
        });
        productsPage.render(catalog)
      // default:
        break;
    }


  }


  filterValues(buttonsFilter: NodeListOf<Element>) {
    const forFilter: string[] = Array.from(buttonsFilter)
      .filter((btn) => btn.classList.contains('btn_active'))
      .map((btn) => btn.innerHTML);
    return forFilter;
  }


}

export const filters = new Filters();

buttonsFilter.forEach((el) => {
  el.addEventListener('click', () => { el.classList.toggle('btn_active'); });
});

buttonsFilter.forEach((el) => {
  el.addEventListener('click', filters.filters);
});

selectSort?.addEventListener('change', filters.filters);
inputSearch?.addEventListener('input', filters.filters)

sliderElementQuntity.noUiSlider.on("update", filters.filters)
sliderDataReleaseElement.noUiSlider.on("update", filters.filters)









// const  InputFilteredCatalog = CATALOG.filter(element => Object.values(element)
//   .some(elem => {
//     if (typeof (elem) === 'string' && !elem.match(/\.(jpe?g|png|gif|svg)$/i))
//       return elem.toLowerCase().includes('S'.toLowerCase())
//   }));


