import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function CounterWithReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Counter with Reducer: {count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

export default CounterWithReducer;
