import React, {useState} from "react";

type AccordionProps = {
    title: string
}

export function UnAccordion(props: AccordionProps) {

    let [collapsed, setCollapsed] = useState(false)

    function collapsedMenu() {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle message={props.title} onClick={collapsedMenu}/>
        {collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleProps = {
    message: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitleProps) {
    return <div><h3 onClick={props.onClick}>-- {props.message} --</h3> </div>
}

export function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UnAccordion