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

    if(action.type === "REMOVE_ITEM"){
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.id)
      }
    } 

    return state;
 }

 export default rootReducer;