import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./Components/OnOff/OnOff";


function App() {

    // let [ratingValue,setRatingValue] = useState<ValueTypeProps>(1)
    let [collapse, setCollapse] = useState(true)
    let [on, setOn] = useState(true)

    return <div className={'app'}>
    <OnOff on={on} onChange={setOn}/>
    </div>
}

type PageTitleProps = {
    title: string
}


export default App;
