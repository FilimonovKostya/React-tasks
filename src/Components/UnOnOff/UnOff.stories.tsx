import React, {useState} from "react";
import {UnOnOff} from "./UnOnOff";


export default {
    title:'Not controlled UnOff',
    component:UnOnOff
}

export const ModeChangingUnOff = () => {
    const [on,setOn] = useState<boolean>(true)
    return <UnOnOff value={on} setOn={setOn}/>
}