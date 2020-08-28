import React from "react";

type StarProps = {
    selected: boolean

}

type RatingProps = {
    value: number
}

const starStyle = {
    color: '#673ab7'
}

export function Rating(props: RatingProps) {
    return <div>
        <Star selected={props.value >= 1}/>
        <Star selected={props.value >= 2}/>
        <Star selected={props.value >= 3}/>
        <Star selected={props.value >= 4}/>
        <Star selected={props.value >= 5}/>
    </div>
}

function Star(props: StarProps) {
    return <>
        <span>{props.selected ? <b style={starStyle}> ★ </b> : ' ★ '}</span>
    </>
}

export default Rating