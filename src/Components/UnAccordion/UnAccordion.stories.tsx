import UnAccordion from "./UnAccordion";
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Changing Accordion',
    component: UnAccordion
}
const onClickCallBack = action('some item was clicked')
export const ChangingAccordion = () => <UnAccordion title={'Кликни пожалуйста'}
                                                    items={[
                                                        {title: 'Julia', value: 1},
                                                        {title: 'Liza', value: 2},
                                                        {title: 'Artem', value: 3},
                                                        {title: 'Viktor', value: 4},]} onClick={(id)=> { alert(`users with id ${id} should be happy` ) }}/>