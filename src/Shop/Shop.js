import { Component } from "react";
import Menu from "../Menu/Menu";
import ShopList from "../ShopList/ShopList";
import Cart from "../Cart/Cart";

export default class Shop extends Component {
  products = this.props.products;

  state = {
    cart: [],
    tab: "shop",
  };

  calcTotalQuantity = () => {
    let res = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      res += this.state.cart[i].quantity;
    }
    return res;
  };

  calcTotalPrice = () => {
    let sum = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      sum += this.state.cart[i].price * this.state.cart[i].quantity;
    }
    return sum;
  };

  tabHandle = (tab) => {
    if (tab === "shop" && this.state.tab !== "shop") {
      this.setState({ ...this.state, tab: "shop" });
    } else if (tab === "cart" && this.state.tab !== "cart") {
      this.setState({ ...this.state, tab: "cart" });
    }
  };

  addToCartHandler = (id) => {
    const newCart = [...this.state.cart];
    const newItem = { ...this.products[id], quantity: 1 };
    newCart.push(newItem);
    this.setState({ cart: newCart });
  };

  handleCounter = (id, type) => {
    let count = this.state.cart[id].quantity;
    if (type === "inc") {
      count++;
    } else if (type === "dec" && count === 1) {
      return;
    } else {
      count--;
    }
    const newCart = [...this.state.cart];
    newCart[id] = { ...this.state.cart[id], quantity: count };

    this.setState({ ...this.state, cart: newCart });
  };

  removeHandler = (index) => {
    const cartList = [...this.state.cart];
    cartList.splice(index, 1);
    this.setState({ cart: cartList });
  };

  render() {
    const shopTab = (
      <ShopList
        products={this.products}
        cartList={this.state.cart}
        handleCounter={this.handleCounter}
        addToCartHandler={this.addToCartHandler}
      />
    );
    const cartTab = (
      <Cart
        cartList={this.state.cart}
        handleCounter={this.handleCounter}
        removeHandler={this.removeHandler}
        calcTotalPrice={this.calcTotalPrice}
      />
    );

    return (
      <>
        <Menu quantity={this.calcTotalQuantity()} tabHandle={this.tabHandle} />
        {this.state.tab === "shop" ? shopTab : cartTab}
      </>
    );
  }
}
