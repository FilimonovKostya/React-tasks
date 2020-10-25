import React from "react";

type AccordionProps = {
    title: string
    collapse: boolean

}

function  Accordion(props: AccordionProps) {
    console.log('Accordion Rendering')
    return <div>
        <AccordionTitle message={props.title} />
        {props.collapse && <AccordionBody/>}
    </div>
}

type AccordionTitleProps = {
    message: string


}

function AccordionTitle(props: AccordionTitleProps) {
    console.log('AccordionTitle Rendering')
    return <h3 >-- {props.message} --</h3>
}

function AccordionBody() {
    console.log('AccordionBody Rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default React.memo(Accordion)