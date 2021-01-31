import Counter from "../Counter/Counter";

export default function Product({ src, title, price, id, idInCart, quantity, handleCounter, addToCartHandler }) {
  function renderCounter() {
    if (quantity > 0) {
      return (
        <Counter
          quantity={quantity}
          id={idInCart}
          handleCounter={handleCounter}
        />
      );
    } else {
      return (
        <a
          className="btn btn-block btn-success"
          href="#buy"
          onClick={() => addToCartHandler(id)}
        >
          Add to cart
        </a>
      );
    }
  }

  return (
    <div className="col-md-4">
      <figure className="card card-product-grid">
        <div className="img-wrap">
          <img src={src} alt="item" />
        </div>
        <figcaption className="info-wrap">
          <div className="fix-height">
            <p className="title">{title}</p>
            <div className="price-wrap mt-2">
              <span className="price">${price}</span>
            </div>
          </div>
          {renderCounter()}
        </figcaption>
      </figure>
    </div>
  );
}
