class LocalStorag {
  keyName: string;

  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  setProducts(id: string) {
    const products: [] | string[] = this.getProducts();
    const index = products.indexOf(id);
    let pushProduct = false;
    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.slice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));

    return {
      pushProduct,
      products,
    };
  }
}
const localStorageUtil = new LocalStorag();
const a = localStorageUtil.getProducts();
