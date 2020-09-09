import React from "react";


type UnOnOff = {
    value:boolean
    setOn:(value:boolean) => void
}

export function UnOnOff(props:UnOnOff){


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
        backgroundColor: props.value ? 'lightgreen' : 'white'
    }

    const offStyle = {
        width: '40px',
        height:'30px',
        border:'1px solid black',
        padding: '5px',
        margin: '5px',
        cursor:'pointer',
        backgroundColor: !props.value ? '#ff7272' : 'white'
    }

    const lightStyle = {
        width: '30px',
        height:'30px',
        border:'1px solid black',
        borderRadius: '50%',
        backgroundColor: props.value ? 'lightgreen' : '#ff7272'
    }

    return <div style={wrapperStyle}>
        <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
        <div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
        <div style={lightStyle}/>
    </div>
}
