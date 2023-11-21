import React, { useState } from 'react'
import "./Counter.css"

const Counter = (props) => {
    const [count, setCount] = useState(props.count);

    const num = props.num

    const increase = () => {
        setCount(count + num)
    }
    const decrease = () => {
        setCount(count - num >= 0 ? count - num : 0)
    }
    return (
        <div className='counter-container'>
            <button onClick={decrease}>-</button>
            <p>Count: {count}</p>
            <button onClick={increase}>+</button>
        </div>

    )
}

export default Counter