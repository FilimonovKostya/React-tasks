import React from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    title: string
    items: ItemType[] // равносильна Array<string>
    onClick: (value: any) => void
}
type ItemType = {
    title: string
    value: any
}

export function UnAccordion(props: AccordionPropsType) {
    let [state, dispatch] = React.useReducer(reducer, { collapsed: false })

    return <div>
        <AccordionTitle message={props.title} onClick={() =>  dispatch({type: 'TOGGLE-COLLAPSED'})}/>
        {!state.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitleProps = {
    message: string
    onClick: () => void

}

export function AccordionTitle(props: AccordionTitleProps) {
    return <div><h3 onClick={props.onClick}>-- {props.message} --</h3></div>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {
            props.items.map((items, index) => <li onClick={() => {
                props.onClick(items.value)
            }} key={index}> {items.title} </li>)
        }
    </ul>
}

export default React.memo(UnAccordion)