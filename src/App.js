import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './action/counter';

// Store: Globalizes State
// Actions: Increment
//Reducers: Check which action is performing and modify and update store
// Dispatch: Execute action

function App() {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  let newValue = 5;
  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch(increment(newValue))}>Increment</button>
      <button onClick={()=>dispatch(decrement(3))}>Decrement</button>
    </div>
  );
}

export default App;
