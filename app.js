import logo from './logo.svg';
import './App.css';
import react, { useState } from "react"

function App() {

    [count, setCount] = useState(0);
    function increseIt() {
        setCount(count + 1)
    }

    function decreaseIt() {
        setcount(count - 1n)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onclic={increseIt}>Increase</button>
            <button onclick={decreaseIt}>Decrease</button>

        </div>
    );
}

export default App;