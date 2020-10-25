import React, {useState} from "react";


type StarProps = {
    selected: boolean
    setStar: () => void

}

const starStyle = {
    color: '#ff070e'
}

function UnRating() {

    let [star,setStar] = useState(0)



    return <div>
        <Star selected={1 <= star} setStar={() => setStar(1)} />
        <Star selected={2 <= star} setStar={() => setStar(2)} />
        <Star selected={3 <= star} setStar={() => setStar(3)} />
        <Star selected={4 <= star} setStar={() => setStar(4)} />
        <Star selected={5 <= star} setStar={() => setStar(5)} />
    </div>
}

function Star(props: StarProps) {
    debugger
    return <>
        <span onClick={() => props.setStar()}>{props.selected ? <b style={starStyle}> ★ </b> : ' ★ '}</span>
    </>
}

export default React.memo(UnRating)