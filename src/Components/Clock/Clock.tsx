import React, {useEffect} from "react";

function Clock() {
    let [time, setTime] = React.useState('')


        setTimeout(() => {
            setInterval(() => {
                let dateTime = new Date()
                setTime(dateTime.toLocaleTimeString())
            }, 1000)
        }, 1000)


    console.log(time)

    return <div>

        time : {time}

    </div>

}

export default Clock