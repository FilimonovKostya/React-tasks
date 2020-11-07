import React, {useState} from "react";

export default {
    title: 'UseState demo'
}

export const Example1 = () => {
    console.log('Exmaple 1')

    const [counter, setCounter] = useState(0)

    const changer = (state:number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}> +</button>
        {counter}
    </>
}

