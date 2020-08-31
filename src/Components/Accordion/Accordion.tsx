import React from "react";

type AccordionProps = {
    title: string
    collapse: boolean
    onClick: (value:boolean) => void
}

export function Accordion(props: AccordionProps) {
    return <div>
        <AccordionTitle message={props.title} onClick={() => props.onClick(!props.collapse)} />
        {props.collapse && <AccordionBody/>}
    </div>
}

type AccordionTitleProps = {
    message: string
    onClick:(value:boolean) => void

}

function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={() => props.onClick(true)}>-- {props.message} --</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion