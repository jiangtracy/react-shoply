import './App.css';
import inventory from './data.json';
import Itemlist from './Itemlist';
import rootReducer from './rootReducer';
import { useReducer } from 'react';
import Cart from "./Cart";

function App() {
	const [ state, dispatch ] = useReducer(rootReducer, {
		cart: [],
		inventory: inventory.products,
	});

	return (
  <div className="App" >
    <Cart currCart={state.cart} />
    <Itemlist items={state.inventory} 
              dispatch={dispatch} />
  </div>
  ) 
}

export default App;
