import style from "./CleverClock.module.css";
import React from "react";

export function AnalogClock() {

    return <div className={style.analog}>
        <span>{new Date().getHours()}</span> :
        <span>{new Date().getMinutes()}</span> :
        <span>{new Date().getSeconds()}</span>
    </div>
}