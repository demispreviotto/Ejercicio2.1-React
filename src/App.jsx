import { useState } from 'react';
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const [name, setName] = useState("World");

  return (
    <>
      <h1>Hello {name}!</h1>
      <form>
        <div>
          <label htmlFor="number">Number: </label>
          <input type="number" id="number" value={num} min='0' onChange={e => setNum(parseInt(e.target.value))} />
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
      </form>
      <Counter count={count} num={num} />
    </>
  )
}

export default App
