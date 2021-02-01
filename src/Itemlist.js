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
        //make an item component later
      )
    }
    return tags;
  }

  return (
    {generateTags()}
  )
}

export default Itemlist;