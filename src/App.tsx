import React from "react";
import "./App.css";
import UnAccordion from "./Components/UnAccordion/UnAccordion";

function App() {
    return (
        <div>

        <UnAccordion title={'Users'} items={[{value: 1, title:'da'}, {value: 2 , title:'dadad'} ]} onClick={()=>console.log(10)} />

        </div>
    );
}

export default App;
