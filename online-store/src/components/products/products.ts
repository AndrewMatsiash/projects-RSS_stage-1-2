import { CATALOG } from "../../constants/catalog";
import { ROOT_PRODUCTS } from "../../constants/root";

class Products {

  render() {
    let htmlCatalog = ''
    CATALOG.forEach(({ id, name, img, popular, numberOfCameras, color, quantity, releaseDate, brand }) => {
      htmlCatalog += `
  <li сlass="products-element__b">
    <span class="products-element__name">${name}</span>
    <img class="products-element__img" src="${img}">
    <span class="products-element__quanlity">Количество на складе: ${quantity}</span>
    <span class="products-element__relase-data">Дата релиза:${releaseDate}</span>
    <span class="products-element__brand">Производитель:${brand}</span>
    <span class="products-element__color">Цвет:${color}</span>
    <span class="products-element__cameras">Количество камер:${numberOfCameras}</span>
    <span class="products-element__popular">Популярный:${popular}</span>
    <button class="products-element__btn">добавить в корзину</button>
  </li>
  `
      const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

      ROOT_PRODUCTS!.innerHTML = html;
    })
  }
}
const productsPage = new Products();
productsPage.render()
