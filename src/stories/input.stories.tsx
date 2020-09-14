import React, {ChangeEvent, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";

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


export const ControlledInput = () => {
    const [parentValue,setParentvalue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setParentvalue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
 const [controlledChecbox, setControlledCheckBox] = useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
     setControlledCheckBox(e.currentTarget.checked)
    }
    return <span> <input type="checkbox"
                  checked={controlledChecbox}
                         onChange={onChange}/> Check me </span>

}


export const ControlledSelect = () => {

    const [controlledChecbox, setControlledCheckBox] = useState<string | undefined>('2')
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setControlledCheckBox(e.currentTarget.value)
    }
    return <select value={controlledChecbox} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={"2"}>Kiev</option>
        <option value={"3"}>Moscow</option>
        <option value={"4"}>Riga</option>
    </select>

}


export const CotrolledInputWithFixedValue = () => <input value={'It-incubator'}/>
