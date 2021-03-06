import React, {useEffect} from "react";
import style from './CleverClock.module.css'
import {AnalogClock} from "./AnalogClock";

type CleverClockPropsType = {
    digitalVersion: boolean
}

function CleverClock(props:CleverClockPropsType) {

    const deg = 6

    const day = new Date()
    const [hh, setHh] = React.useState(day.getHours() * 30)
    const [mm, setMm] = React.useState(day.getMinutes() * deg)
    const [ss, setSs] = React.useState(day.getSeconds() * deg)

    useEffect(() => {
        const time = setInterval(() => {
            setSs(new Date().getSeconds() * deg)
            setMm(new Date().getMinutes() * deg)
            setHh(new Date().getHours() * 30)

            return () => {
                clearInterval(time)
            }
        }, 1000)
    },)


    let styleHr = {
        transform: `rotateZ(${(hh) + (mm / 12)}deg)`
    }

    let styleMn = {
        transform: `rotateZ(${mm}deg)`
    }

    let styleSs = {
        transform: `rotateZ(${ss}deg)`
    }


    return props.digitalVersion ?
        <div className={style.clock}>
            <div className={style.hour}>
                <div className={style.hr} id={'hr'} style={styleHr}/>
            </div>
            <div className={style.min}>
                <div className={style.mn} id={'mn'} style={styleMn}/>
            </div>
            <div className={style.sec}>
                <div className={style.sc} id={'sc'} style={styleSs}/>
            </div>
        </div>

        : <AnalogClock/>

}


export default CleverClock