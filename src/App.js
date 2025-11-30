
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data , setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 2000)
  },[])


  return (
    <div>
      {data && <div>data</div>}
      <h1>Hello World</h1>
      <button>Click Me</button>
      <div>
        <label>
          Enter text
          <input placeholder="Enter the text" type="text" />
        </label>
      </div>
    </div>
  );
}

export default App;
