import { CATALOG } from '../../constants/catalog';
import {
  sliderDataRelease,
  sliderDataReleaseElement,
  sliderElementQuntity,
  sliderQuantity } from '../../utils/noSlider';
import { productsPage } from '../products/products';



const buttonsFilterBrand = document.querySelectorAll('.btn-brand');
const buttonsFilterColor = document.querySelectorAll('.btn-color');
const buttonsFilterCamaras = document.querySelectorAll('.btn-cameras');
const buttonsFilterPopular = document.querySelectorAll('.btn-popular');
const buttonsFilter = document.querySelectorAll('.btn-filter');
const inputSearch = document.querySelector('.search') as HTMLInputElement;
const massage = document.querySelector('.massage') as HTMLElement;
// const btnResetSettings = document.querySelector('.reset-settings');
// const btnResetFilters = document.querySelector('.reset-filters');
const selectSort = document.querySelector('#select') as HTMLSelectElement;

function addedButtonsClassActiveLocalStorage(buttons: NodeListOf<Element>, filterLocalStorage: string[]) {
  Array.from(buttons)
    .filter((el) => filterLocalStorage.includes(el.innerHTML))
    .forEach(((el) => el.classList.add('btn_active')))
}


if (localStorage.getItem('filters') !== null) {
  const filtersLocal = JSON.parse(localStorage.getItem('filters') as string)
  inputSearch.value = filtersLocal.inputSearchValue
  selectSort.value = filtersLocal.selectValue
  sliderDataRelease.set(filtersLocal.sliderDataReleaseArr)
  sliderQuantity.set(filtersLocal.sliderQuantityArr)
  addedButtonsClassActiveLocalStorage(buttonsFilterBrand,filtersLocal.filterBrandArr)
  addedButtonsClassActiveLocalStorage(buttonsFilterCamaras,filtersLocal.filterByCamerasArr)
  addedButtonsClassActiveLocalStorage(buttonsFilterColor,filtersLocal.filterByColorArr)
  addedButtonsClassActiveLocalStorage(buttonsFilterPopular,filtersLocal.filterByPopular)
}





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
    const selectValue = selectSort.value
    const inputSearchValue = inputSearch.value
    const keys = ['name', 'brand', 'popular', 'color',]

    localStorage.setItem('filters', JSON.stringify({
      filterBrandArr,
      filterByCamerasArr,
      filterByColorArr,
      filterByPopular,
      sliderQuantityArr,
      sliderDataReleaseArr,
      selectValue,
      inputSearchValue
    }))

    if (inputSearchValue !== "") {
      localStorage.setItem('FilterInputSearch', JSON.stringify(inputSearch.value))
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


    if (sliderDataReleaseArr[0] > 2000 || sliderDataReleaseArr[1] < 2022) {
      catalog =
        catalog.filter((el) => el.releaseDate >= sliderDataReleaseArr[0] && el.releaseDate <= sliderDataReleaseArr[1]);
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
        localStorage.setItem('FilterSlect', JSON.stringify(selectValue))
        catalog = catalog.sort((a, b) => {
          if (b.quantity > a.quantity) return 1
          if (b.quantity < a.quantity) return -1
          return 0
        });
        productsPage.render(catalog)
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

//слушатели событий на элементы
buttonsFilter.forEach((el) => {
  el.addEventListener('click', () => { el.classList.toggle('btn_active'); });
});

buttonsFilter.forEach((el) => {
  el.addEventListener('click', filters.filters);
});

selectSort?.addEventListener('change', filters.filters);
inputSearch?.addEventListener('input', filters.filters)
sliderElementQuntity.noUiSlider?.on("update", filters.filters)
sliderDataReleaseElement.noUiSlider?.on("update", filters.filters)




// btnResetFilters?.addEventListener('click', () => {
//   inputSearch.value = ""
//   buttonsFilter.forEach((el) => {
//     el.classList.remove('btn_active')
//   });
//   selectSort.value = "sortFromAtoЯ"
//   sliderDataReleaseElement.noUiSlider?.reset();
//   sliderElementQuntity.noUiSlider?.reset();
// })









