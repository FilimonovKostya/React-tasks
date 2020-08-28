import React, {useState} from "react";




function UnOnOff(){

    let [on,setOn] = useState(true)

    const wrapperStyle = {
        display:'flex',
        padding: '10px'

    }

    const onStyle = {
        width: '40px',
        height:'30px',
        border:'1px solid black',
        padding: '5px',
        margin: '5px',
        cursor:'pointer',
        backgroundColor: on ? 'lightgreen' : 'white'
    }

    const offStyle = {
        width: '40px',
        height:'30px',
        border:'1px solid black',
        padding: '5px',
        margin: '5px',
        cursor:'pointer',
        backgroundColor: !on ? '#ff7272' : 'white'
    }

    const lightStyle = {
        width: '30px',
        height:'30px',
        border:'1px solid black',
        borderRadius: '50%',
        backgroundColor: on ? 'lightgreen' : '#ff7272'
    }

    return <div style={wrapperStyle}>
        <div style={onStyle} onClick={() => setOn(true)}>On</div>
        <div style={offStyle} onClick={() => setOn(false)}>Off</div>
        <div style={lightStyle}/>
    </div>
}

export default UnOnOff