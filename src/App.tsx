import React from 'react';
import './App.css';
import Select from "./Components/Select/Select";


function App() {
    return <div>
        <Select value={2} onChange={() => console.log('заглушка')} items={[
            {title: 'Julia', value: 1},
            {title: 'Liza', value: 2},
            {title: 'Artem', value: 3},
            {title: 'Viktor', value: 4},]}/>
    </div>
}


export default App;
