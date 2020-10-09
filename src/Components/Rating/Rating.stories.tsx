import React, {useState} from "react";
import Rating, {ValueTypeProps} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} setValue={x => x}/>
export const Rating1 = () => <Rating value={1} setValue={x => x}/>
export const Rating2 = () => <Rating value={2} setValue={x => x}/>
export const Rating3 = () => <Rating value={3} setValue={x => x}/>
export const Rating4 = () => <Rating value={4} setValue={x => x}/>
export const Rating5 = () => <Rating value={5} setValue={x => x}/>
export const ChangeRating = () => {
    const [value, setValue] = useState<ValueTypeProps>(2)

    return <Rating value={value} setValue={setValue}/>
}