import React, {useState} from "react";
import UnOnOff from "./UnOnOff";

export default {
    title: 'Changing UnOff',
    component: UnOnOff
}

export const  ChangingOnOff = () => {
    const [on,setOn] = useState(true)

   return  <UnOnOff value={on} setOn={setOn} />
}