import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import UnOnOff from "./Components/UnOnOff/UnOnOff";


function App() {

    // let [ratingValue,setRatingValue] = useState<ValueTypeProps>(1)
    let [collapse, setCollapse] = useState(true)
    let [on,setOn] = useState(true)

    return <div className={'app'}>
        {/*<Rating value={ratingValue} setValue={setRatingValue} />*/}
        {/*<hr/>*/}
        {/*<UnRating/>*/}
        {/*<hr/>*/}
        <Accordion title={'Hey'} collapse={collapse} onClick={setCollapse}/>
        <hr/>
        <UnOnOff value={on} setOn={setOn}/>
    </div>
}

type PageTitleProps = {
    title: string
}


export default App;
