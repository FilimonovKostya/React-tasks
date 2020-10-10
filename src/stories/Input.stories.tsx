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

    return <> <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual Value : {value}  </>
}

export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = React.useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = React.useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Mogilev</option>
        <option value="3">Moscow</option>
    </select>

}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = React.useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}