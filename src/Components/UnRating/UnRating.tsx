import React, {useState} from "react";

type StarProps = {
    selected: boolean

}

const starStyle = {
    color: '#673ab7'
}

export function UnRating() {

    let [star,setStar] = useState(0)

    return <div>
        <Star selected={1 <= star}/> <button onClick={() => setStar(1)}>1</button>
        <Star selected={2 <= star}/> <button onClick={() => setStar(2)}>2</button>
        <Star selected={3 <= star}/><button onClick={() => setStar(3)}>3</button>
        <Star selected={4 <= star}/> <button onClick={() => setStar(4)}>4</button>
        <Star selected={5 <= star}/><button onClick={() => setStar(5)}>5</button>
    </div>
}

function Star(props: StarProps) {
    return <>
        <span>{props.selected ? <b style={starStyle}> ★ </b> : ' ★ '}</span>
    </>
}

export default UnRating