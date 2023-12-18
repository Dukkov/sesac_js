const CounterResult = (props) => {
    let result;

    if (props.cnt % 2 === 0)
        result = "Even number";
    else
        result = "Odd number";

    return (
        <div>
            <h2>{result}</h2>
        </div>
    )
};

export default CounterResult;