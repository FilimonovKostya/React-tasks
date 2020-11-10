import React from "react";
import "./App.css";
import CleverClock from "./Components/CleverClock/CleverClock";


function App() {
    return (
        <div>
            <CleverClock digitalVersion={true}/>
        </div>
    );
}

export default App;
