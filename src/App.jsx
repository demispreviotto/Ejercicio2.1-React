import { useEffect, useState } from 'react';
import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting';

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  return (
    <>
      <Greeting />
      <form>
        <div>
          <label htmlFor="number">Number: </label>
          <input type="number" id="number" value={num} min='0' onChange={e => setNum(parseInt(e.target.value))} />
        </div>
      </form>
      <Counter count={count} num={num} />
    </>
  )
}

export default App
