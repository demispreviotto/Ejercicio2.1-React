import React, { useEffect, useState } from 'react'

const Greeting = () => {
    const [name, setName] = useState("Euralio");
    useEffect(() => {
        setTimeout(() => {
            setName('Alfonsina')
        }, 3000);
    })
    return (
        <>
            <p>Hello {name}!</p>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
        </>

    )
}

export default Greeting