import { useState } from "react";
import CounterResult from "./CounterResult"

const Counter = (props) => {
    const [ count, setCount ] = useState(props.num);

    const onIncrement = () => {
        setCount(count + 1);
    };

    const onDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <CounterResult cnt={count}/>
            {/* <CounterResult>{count}</CounterResult> */}
        </div>
    )
};

export default Counter;