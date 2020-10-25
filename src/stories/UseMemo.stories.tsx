import React from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = React.useState(3)
    const [b, setB] = React.useState(3)

    let resultA = 1
    let resultB = 1

    resultA = React.useMemo(() => {
        let tempResult = 1
        for(let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

export const HelpReactMemo = () => {
    const [a, setA] = React.useState(3)
    const [b, setB] = React.useState(3)

    let resultA = 1
    let resultB = 1

    resultA = React.useMemo(() => {
        let tempResult = 1
        for(let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}