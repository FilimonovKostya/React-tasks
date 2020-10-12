import React, {useState} from 'react';
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
    const [collapsed, setCollapsed] = useState(true)

    const styleSelect = props.items.find( f=> f.value === props.valueId ) ? 'styleSelect' : 'error'

    const element = props.items.find(f => f.value === props.valueId)
    const arrayElements = props.items.map((f, index) => <div key={index}
                                                             className={f.value === props.valueId ? 'styleSelect' : 'error'}> {f.title} </div>)

    const onClickHandler = () => setCollapsed(!collapsed)

    return (
        <div className={'select'}>
            <div className={'element'} onClick={onClickHandler}> {element && element.title} </div>
            {collapsed && arrayElements}
        </div>
    );
}

export default Select;

