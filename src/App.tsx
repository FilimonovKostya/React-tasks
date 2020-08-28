import React from 'react';
import './App.css';
import OnOff from './Components/OnOff/OnOff';
import UnOnOff from "./Components/UnOnOff/UnOnOff";
import UnAccordion from "./Components/UnAccordion/UnAccordion";
import UnRating from "./Components/UnRating/UnRating";


function App() {
    return <div>

        <OnOff on={true}/>
        <OnOff on={false}/>
        <hr/>
        <UnOnOff/>
        <hr/>
        <UnAccordion title={'Uncontrolled Accordion'}/>
        <hr/>
       <UnRating/>
    </div>
}

type PageTitleProps = {
    title: string
}


export default App;
