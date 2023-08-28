import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  if(count == 0){
    return( 
      <button onClick={handleClick}>
      Clicked {count} time
      </button>
    );
  }
  else{
    return( 
      <button onClick={handleClick}>
      Clicked {count} times
      </button>
    );
  }
  
}

