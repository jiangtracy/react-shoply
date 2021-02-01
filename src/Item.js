/** Item for shopping inventory list
 * 
 * props: 
 * - id
 * - name
 * - price
 * - description
 * - image_url
 * - dispatch
 * 
 * state: None
 * 
 * ItemList -> Item
 */

function Item({id, name, price, description, image_url, dispatch}) {
  return (
    <div className="Item">
      <h3>{name}</h3>
      <h4>Price: {price}</h4>
      <p>{description}</p>
      <img width='200' src={image_url} alt={name} />
      <button onClick={evt => dispatch({type: 'ADD_ITEM', item: {name, price, id}})} >Add to cart</button>
      <button onClick={evt => dispatch({type: 'REMOVE_ITEM', id: id})} >Remove from cart</button>
    </div>
  )
}

export default Item;