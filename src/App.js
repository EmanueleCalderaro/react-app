import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}


function MyButton({count, onClick}) {

  if(count == 0){
    return( 
      <button onClick={onClick}>
      Clicked {count} time
      </button>
    );
  }
  else{
    return( 
      <button onClick={onClick}>
      Clicked {count} times
      </button>
    );
  }
  
}

