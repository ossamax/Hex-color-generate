import React, { useState } from "react";
import "./App.css";
import SingleColor from "./singleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handlSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <form onSubmit={handlSubmit}>
            <label htmlFor="color">HEX Color Generator</label>
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              placeholder="#f15025"
              className={error ? "error" : ""}
            />
            <button>Generate</button>
          </form>
        </header>
        <div className="colors">
          {list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
