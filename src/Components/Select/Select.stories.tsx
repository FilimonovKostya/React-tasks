import React, {useState} from "react";
import Select from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const MySelect1 = () =>{
    const [value,setValue] = useState(1)

    return <Select valueId={value} onChange={setValue}
                   items={[
                       {title: 'Julia', value: 1},
                       {title: 'Liza', value: 2},
                       {title: 'Artem', value: 3},
                       {title: 'Viktor', value: 4},
                   ]}/>
}

export const MySelect2 = () => <Select valueId={2} onChange={() => console.log('Заглушка')}
                                       items={[
                                           {title: 'Julia', value: 1},
                                           {title: 'Liza', value: 2},
                                           {title: 'Artem', value: 3},
                                           {title: 'Viktor', value: 4},
                                       ]}/>

export const MySelect3 = () => <Select valueId={3} onChange={() => console.log('Заглушка')}
                                       items={[
                                           {title: 'Julia', value: 1},
                                           {title: 'Liza', value: 2},
                                           {title: 'Artem', value: 3},
                                           {title: 'Viktor', value: 4},
                                       ]}/>

export const MySelect4 = () => <Select valueId={4} onChange={() => console.log('Заглушка')}
                                       items={[
                                           {title: 'Julia', value: 1},
                                           {title: 'Liza', value: 2},
                                           {title: 'Artem', value: 3},
                                           {title: 'Viktor', value: 4},
                                       ]}/>

export const UndefinedSelect = () => <Select valueId={5} onChange={() => console.log('Заглушка')}
                                       items={[
                                           {title: 'Julia', value: 1},
                                           {title: 'Liza', value: 2},
                                           {title: 'Artem', value: 3},
                                           {title: 'Viktor', value: 4},
                                       ]}/>