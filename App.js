import React from 'react';
import Counter from './Counter';
import DataFetching from './DataFetching';
import ThemeButton from './ThemeButton';
import CounterWithReducer from './CounterWithReducer';

function App() {
    return (
        <div className="App">
            <h1>React Hooks Demo</h1>
            <Counter />
            <DataFetching />
            <ThemeButton />
            <CounterWithReducer />
        </div>
    );
}

export default App;
