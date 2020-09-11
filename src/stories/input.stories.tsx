import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input',
    //component: input,
}

export const UnCotrolledInput = () => <input/>



export const TrackingValueOfUnCotrolledInput = () => {
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    const [value, setValue] = useState('')
    return <> <input value={value} onChange={onChange}/> - {value} - </>
}


export const getValueOfUnCotrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - atual value: {value} - </>
}
export const CotrolledInputWithFixedValue = () => <input value={'It-incubator'}/>
