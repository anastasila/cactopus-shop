import Product from "../Product/Product";
export default function ShopList({ products, cartList, handleCounter, addToCartHandler }) {
  let idInCart = -1;
  function getQuantity(product) {
    const itemInCart = cartList.find((cartItem, i) => {
      idInCart = i;
      return cartItem.id === product.id;
    });
    if (itemInCart) {
      return itemInCart.quantity;
    }
  }
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <Product
            {...product}
            key={product.id}
            quantity={getQuantity(product)}
            idInCart={idInCart}
            handleCounter={handleCounter}
            addToCartHandler={addToCartHandler}
          />
        );
      })}
    </div>
  );
}
