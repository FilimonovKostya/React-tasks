import React, {useEffect} from "react";

type PropsType = {}

const get2digitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = React.useState(new Date())

    useEffect(() => {
      const intervalID =  setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return <div>
        <span>{get2digitsString(new Date().getHours())}</span>
        :
        <span>{get2digitsString(new Date().getMinutes())}</span>
        :
        <span>{get2digitsString(new Date().getSeconds())}</span>
    </div>
}