import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 2000);
  }, []);

  return (
    <div>
      {toggle && (
        <div className="toggleApp" data-testid="toggle-app">
          <h2>TOGGLE CONTAINER</h2>
        </div>
      )}
      <div className="container2">
        <h3 data-testid="value-input">{value}</h3>
        {data && <div style={{ color: "orangered" }}>data</div>}
        <h1>Hello World</h1>
        <button data-testid="toggle-btn" onClick={onClick}>
          Click Me
        </button>
        <div>
          <label>
            Enter text
            <input
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter the text"
              type="text"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
