import Item from "./Item";

/**  Itemlist Component 
 * renders a list of shopping cart items
 * 
 * props:
 * - items: list of items in a object
 * 
 * states:
 * - none
*/

function Itemlist({items, dispatch}) {

  let inventory = Object.entries(items);

  /* Helper function to generate the tags */
  function generateTags() {
    let tags = [];
    for(let [key, value] of inventory) {
      tags.push(
        <Item 
            key={key}
            id={key} 
            name={value.name} 
            price={value.price} 
            description={value.description} 
            image_url={value.image_url} 
            dispatch={dispatch} />
      )
    }
    return tags;
  }

  return (
    <div className="ItemList">
      {generateTags()}
    </div>
  )
}

export default Itemlist;