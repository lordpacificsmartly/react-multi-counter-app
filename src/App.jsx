import { useState } from "react";
import "./App.css";

/* Author: Jesse Onoyeyan 
   2 July 2025
*/

function App() {
  const [counter, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounters([...counter, { id: counter.length + 1, value: 0 }]);
  };

  const incrementCounter = (id) => {
    setCounters(
      counter.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  return (
    <div className="app-container">
      <button className="add-button" onClick={addCounter}>
        Add Counter
      </button>
      <ul className="counter-list">
        {counter.map((counter) => (
          <li className="counter-item" key={counter.id}>
            <span className="counter-label">
              Counter {counter.id}: {counter.value}
            </span>

            <button
              className="increment-button"
              onClick={() => incrementCounter(counter.id)}
            >
              Increment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
