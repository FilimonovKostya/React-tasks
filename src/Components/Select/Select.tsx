import React, {useState, FocusEvent} from 'react';
import '../../App.css';

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    valueId: any
    onChange: (value: any) => void
    items: ItemType[]
}

function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const element = props.items.find(f => f.value === props.valueId)
    const arrayElements = props.items.map((f, index) => {

        return <div key={index} className={f.value === props.valueId ? "styleSelect" : 'hover'} onClick={() => {
            props.onChange(f.value);
            setCollapsed(false)
        }}> {f.title} </div>
    })

    const onClickHandler = () => setCollapsed(!collapsed)
    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.tagName === 'div') {
            return alert('dada')
        }
    }
    return (
        <div className={'select'}>
            <div className={'element'} onClick={onClickHandler} onBlur={onBlurHandler}> {element && element.title} </div>
            {collapsed && arrayElements}
        </div>
    );
}

export default Select;

