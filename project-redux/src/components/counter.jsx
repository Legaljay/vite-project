import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    // const [count, setCount] = useState(0)

    return (
        <div className="flex text-5xl flex-col items-center justify-center gap-5">
            <p>this count is: {count}</p>
            <div className="gap-10 flex">
                {/* <button onClick={() => setCount(count => count <= 0 ? 0 : count - 1)}>-</button> */}
                <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                        >
                        +
                </button>
                <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                        >
                        -
                </button>
                <button
                        aria-label="Increment value"
                        onClick={() => dispatch(incrementByAmount(2))}
                        >
                        +
                </button>
                <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrementByAmount(2))}
                        >
                        -
                </button>
                {/* <button onClick={() => setCount(count + 1)}>+</button> */}
            </div>

        </div>
    )
}

export default Counter