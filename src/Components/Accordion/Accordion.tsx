import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionProps) {
    return <div>
        <AccordionTitle message={props.title} />
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleProps = {
    message: string
}

function AccordionTitle(props: AccordionTitleProps) {
    return <h3>-- {props.message} --</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion