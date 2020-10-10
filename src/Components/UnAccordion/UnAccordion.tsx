import React, {useState} from "react";

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

    let [collapsed, setCollapsed] = useState(false)

    function collapsedMenu() {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle message={props.title} onClick={collapsedMenu}/>
        {collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

export default UnAccordion