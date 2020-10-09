import React from "react";

type OnProps = {
    on: boolean

}


export function OnOff(props: OnProps) {

    const wrapperStyle = {
        display: 'flex',
        padding: '10px'

    }

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        padding: '5px',
        margin: '5px',
        backgroundColor: props.on ? 'lightgreen' : 'white'
    }

    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        padding: '5px',
        margin: '5px',
        backgroundColor: !props.on ? '#ff7272' : 'white'
    }

    const lightStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: props.on ? 'lightgreen' : '#ff7272'
    }

    return <div style={wrapperStyle}>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div style={lightStyle}/>
    </div>
}

