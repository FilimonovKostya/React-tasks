import React from 'react';
import './App.css';
import UnOff from "./Components/UnOff/UnOff";

function App() {
    return <div>

        <UnOff on={true}/>

    </div>
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return <h3>{props.title}</h3>
}


export default App;
