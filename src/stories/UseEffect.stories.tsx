import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExam1 = () => {
    const [counter, setCounter] = useState(0)

    console.log('SimpleExam1')

    useEffect(() => {
        console.log('Use effect')
    })

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
      Hello,  {counter}
    </>
}

