import CartRow from "../CartRow/CartRow";

export default function Cart({ cartList, handleCounter, removeHandler, calcTotalPrice }) {
  if (cartList.length > 0) {
    return (
      <>
        <table className="table table-borderless table-shopping-cart">
          <thead className="text-muted">
            <tr className="small text-uppercase">
              <th scope="col">Product</th>
              <th scope="col" width="160">
                Quantity
              </th>
              <th scope="col" width="160">
                Price
              </th>
              <th scope="col" width="160" className="text-right"></th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((cartItem, i) => {
              return (
                <CartRow
                  key={i}
                  {...cartItem}
                  handleCounter={handleCounter}
                  removeHandler={removeHandler}
                  index={i}
                />
              );
            })}
          </tbody>
        </table>
        <tr className="card-body border-top d-flex flex-row-reverse">
          <dl className="dlist-align">
            <dt className="text-right px-3">Total: </dt>
            <dd className="text-right h5">
              <span>{calcTotalPrice()}</span>
            </dd>
          </dl>
        </tr>
      </>
    );
  } else {
    return (
      <div className="section-pagetop bg">
        <h4 className="title-page px-3">No items in the cart.</h4>
      </div>
    );
  }
}
