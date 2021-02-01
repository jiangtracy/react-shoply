import './App.css';
import inventory from './data.json';
import Itemlist from './Itemlist';
import rootReducer from './rootReducer';
import { useReducer } from 'react';

function App() {
	const [ state, dispatch ] = useReducer(rootReducer, {
		cart: [],
		inventory
	});

	return (
  <div className="App" >
    <Itemlist items={state.inventory} 
              dispatch={dispatch} />
  </div>
  ) 
}

export default App;
