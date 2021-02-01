/** Cart component to display current total for cart
 * 
 * props:
 * - currCart: array of items in cart
 * 
 * state: None
 * 
 * App -> Cart
 */

function Cart({currCart}) {
  let total = currCart.reduce((acc, curr) => {
    return acc += curr.price;
  }, 0);

  return (
    <div className="Cart">
      <h2>Current cart total: {total}</h2>
    </div>
  )
}

export default Cart;