export default function Menu({ quantity, tabHandle }) {
  return (
    <nav className="navbar navbar-dark bg-success mb-4">
      <a
        className="navbar-brand mx-5"
        href="#shop"
        onClick={() => {
          tabHandle("shop");
        }}
      >
        Shop
      </a>
      <i
        className="navbar-brand mx-5 fa fa-shopping-cart d-flex align-items-center"
        onClick={() => {
          tabHandle("cart");
        }}
      >
        <p className="cart-num">{quantity}</p>
      </i>
    </nav>
  );
}