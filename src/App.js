import './App.css';
import React, {useState} from "react";

function App() {
    let [countValue, setCountValue] = useState(0)
    let incCountValue = () => {
        setCountValue(++countValue)
    }
    let resetCountValue = () => {
        setCountValue(countValue = 0)
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className="counter__inner">
                    <div className="counter__window">
                        {(countValue === 5)
                            ? <span className="count-num-max">
                   {countValue}
               </span>
                            : <span className="count-num">
                   {countValue}
               </span>}
                    </div>
                    <CountButtons countValue={countValue} incCountValue={incCountValue}
                                  resetCountValue={resetCountValue}/>
                </div>
            </header>
        </div>
    );
}

const CountButtons = (props) => {
    return (
        <div className="counter-btns">
            <button
                className={(props.countValue === 5) ? "counter__inc-btn-disabled btn-disabled" : "counter__inc-btn btn"}
                disabled={(props.countValue === 5)} onClick={props.incCountValue}>
                inc
            </button>
            <button
                className={(props.countValue === 0) ? "counter__reset-btn-disabled btn-disabled" : "counter__reset-btn btn"}
                disabled={(props.countValue === 0)} onClick={props.resetCountValue}>
                reset
            </button>
        </div>
    )
}


export default App;

