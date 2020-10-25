import React from "react";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

export const AccordionTrue = () => <Accordion title={'Щас ты видишь'} collapse={true}/>
export const AccordionFalse = () => <Accordion title={'А ща уже нет'} collapse={false}/>