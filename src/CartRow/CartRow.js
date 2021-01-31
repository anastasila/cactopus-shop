import Counter from "../Counter/Counter";

export default function CartRow({
  src,
  title,
  price,
  quantity,
  handleCounter,
  removeHandler,
  index,
  calcTotalPrice,
}) {
  const totalPrice = price * quantity;
  return (
    <tr>
      <td>
        <figure className="itemside">
          <div className="aside">
            <img className="img-sm" src={src} alt={title} />
          </div>
          <figcaption className="info">
            <p className="title text-dark">{title}</p>
          </figcaption>
        </figure>
      </td>
      <td>
        <Counter
          quantity={quantity}
          id={index}
          handleCounter={handleCounter}
          calcTotalPrice={calcTotalPrice}
        />
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">{totalPrice}</var>
          <small className="text-muted">{price}</small>
        </div>
      </td>
      <td className="text-right">
        <a
          className="btn btn-light"
          href="#remove"
          onClick={() => removeHandler(index)}
        >
          Remove
        </a>
      </td>
    </tr>
  );
}