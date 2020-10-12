import React, {useState} from 'react';
import '../../App.css';

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(true)



    const element = props.items.find(f => f.value === props.value)




    return (
        <div className={'select'}>
            <div className={'element'} onClick={() => setCollapsed(!collapsed)}> {element && element.title} </div>
            <div >{collapsed && props.items.map(f=> <div className={props.value === props.items ? 'selectedElement' : ''}> {f.title} </div>)}</div>
        </div>
    );
}

export default Select;

