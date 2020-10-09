import {OnOff} from "./OnOff";
import React from "react";

export default  {
    title: 'OnOff',
    component: OnOff
}

export const On = () => <OnOff on={true}/>
export const Off = () => <OnOff on={false}/>