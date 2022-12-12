import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);
  let Increment = () =>{
    setCount(count+1);
  }

  return (
    <div class="ball">
      <h1 class="count" onDoubleClick={() => { alert("cant edit it") }}>{count}</h1>
      <button class='increment-button' onClick={Increment}>Increment</button>
    </div>
  )
}
/* () => { setCount(count + 1) } */

export default App;