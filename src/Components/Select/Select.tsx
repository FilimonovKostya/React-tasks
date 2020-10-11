import React from 'react';

type ItemType = {
    title:string
    value:any
}
type SelectPropsType = {
    value:any
    onChange:(value: any) => void
    items:ItemType[]
}
function Select(props: SelectPropsType) {
    return (
       <div>
           <div> {props.value} </div>
           {props.items.map(i => <div> {i.title} </div>)}
       </div>
    );
}

export default Select;

