export default class ProductList {
  constructor() {
    this.products = [
      { title: "Cio", price: 180 },
      { title: "Dehfiduk", price: 220 },
      { title: "Evpo", price: 193 },
      { title: "Gimsu", price: 500 },
      { title: "Harvey", price: 620 },
      { title: "Leonardo", price: 88 },
      { title: "Nolgi", price: 540 },
      { title: "Remi", price: 19 },
      { title: "Uirvefki", price: 139 },
    ];
  }

  getProducts = () => {
    const tmp = this.products.map((item, i) => {
      return (item = { ...item,
        src: `/img/${item.title}.jpg`,
        quantity: 0,
        id: i,
      });
    });
    return tmp;
  };
}
