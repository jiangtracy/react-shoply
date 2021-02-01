/**  rootReducer
 * 
 */

 function rootReducer(state, action) {
    if(action.type === "ADD_ITEM"){
      return {
        ...state,
        cart: [
          ...state.cart, {...action.item}
        ]
      }
    } 

    // could use reduce to avoid removing all items with filter 
    if(action.type === "REMOVE_ITEM"){
      let itemIdx = state.cart.findIndex(item => item.id === action.id);
      return {
        ...state,
        cart: state.cart.slice(0,itemIdx).concat(state.cart.slice(itemIdx + 1)),
      }
    } 

    return state;
 }

 export default rootReducer;