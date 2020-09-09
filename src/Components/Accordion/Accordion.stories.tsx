import React, {useState} from "react";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion mode change event fired',
    component: Accordion,
}

export const CollapseAccordion = () => <Accordion title={"Menu"} collapse={false} onClick={x => x}/>

export const UnCollapseAccordion = () => <Accordion title={"Users"} collapse={true} onClick={x => x}/>

export  const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return <Accordion title={"Controlled"} collapse={value} onClick={setValue}/>
}