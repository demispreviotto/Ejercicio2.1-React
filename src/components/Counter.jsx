import React, { useState } from 'react'

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
        <>
            <button onClick={decrease}>-</button>
            <div>Count: {count}</div>
            <button onClick={increase}>+</button>
        </>

    )
}

export default Counter