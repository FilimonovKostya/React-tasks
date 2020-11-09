import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExam1 = () => {
    const [counter, setCounter] = useState(0)

    console.log('SimpleExam1')

    useEffect(() => {
        console.log('Use effect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('Use effect only one first')
        document.title = counter.toString()

    })
    useEffect(() => {
        console.log('Use effect evere render when counter change')
        document.title = counter.toString()

    },[counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        Hello, {counter}
    </>
}

export const SetTimeoutExample = () => {

    let [time,setTime] = useState(0)

    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     console.log('useEffect every render')
    //     document.title = counter.toString()
    // })


    setTimeout(() => {
        setInterval(() => {
            let dateTime = new Date()
            setTime(dateTime.getDate())
            console.log(dateTime)
        })
    },1000)

    return <>
       Time : {time}
    </>
}


