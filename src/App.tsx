import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, asyncIncrement, asyncDecrement} from './store/Counter.store';
import './App.css';
import { RootState } from './store/store';


function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter)
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <span>{counter}</span>
      <button onClick={() => dispatch(increment(1))}>Somar</button>
      <button onClick={() => dispatch(asyncIncrement())}>Somar assincrono</button>
      <button onClick={() => dispatch(decrement(1))}>Subtrair</button>
      <button onClick={() => dispatch(asyncDecrement())}>Subtrair assincrono</button>
      <input type="number" onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={() => dispatch(increment(value))}>Somar o valor da entrada</button>
      <button onClick={() => dispatch(decrement(value))}>Subtrair o valor da entrada</button>
    </div>
  );
}

export default App;