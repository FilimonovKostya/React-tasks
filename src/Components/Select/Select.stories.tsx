import React from "react";
import Select from "./Select";

export default {
    title: 'Select',
    component: Select
}

export const MySelect = () => <Select value={3}
                                      onChange={()=> console.log('заглушка')}
                                      items={[
                                          {title: 'Julia', value: 1},
                                          {title: 'Liza', value: 2},
                                          {title: 'Artem', value: 3},
                                          {title: 'Viktor', value: 4},
                                      ]}/>