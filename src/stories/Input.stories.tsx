import React, {ChangeEvent} from "react";

export default {
    title: 'Input'
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = React.useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)

    }

    return <> <input onChange={onChangeHandler}/> - {value} - </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/> <button onClick={save}>Save</button> - actual Value : {value}  </>
}

export const ControlledInput = () => <input value={'it-incubator.by'}/>