import React from "react";

export type ValueTypeProps = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: ValueTypeProps
    setValue:(value: ValueTypeProps) => void
}

const starStyle = {
    color: '#673ab7'
}

export function Rating(props: RatingPropsType) {
    return <div>
        <Star selected={1 <= props.value} value={1} onClick={props.setValue}/>
        <Star selected={2 <= props.value} value={2} onClick={props.setValue}/>
        <Star selected={3 <= props.value} value={3} onClick={props.setValue}/>
        <Star selected={4 <= props.value} value={4} onClick={props.setValue}/>
        <Star selected={5 <= props.value} value={5} onClick={props.setValue}/>

    </div>
}

type StarPropsType = {
    selected:boolean
    value:ValueTypeProps
    onClick: (value: ValueTypeProps) => void
}

function Star(props:StarPropsType) {
    return <>
        <span onClick={() => props.onClick(props.value)}>{props.selected ? <b style={starStyle}> ★ </b> : ' ★ '}</span>
    </>
}

export default React.memo(Rating)