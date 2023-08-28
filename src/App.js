import { useState } from "react";
import './App.css';


export default function App() {

  return (
    <div>
      <h1 className="App-link">Welcome</h1>
      <Greeting name = "Emanuele" />
      <Change />
      <Counting />
    </div>
  );
}

function Greeting ({ name }){
  return <h2>Hello, {name} </h2>;
}


function Change(){
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      <h2>Updated: {updated}</h2>

      <button onClick={handleClick} className="Button">Update</button>

      <h2>Hello, {message}</h2>
      
    </div>
  );
}

function Counting(){
  const [count, setCount] = useState(0);
  function handleClick () {
    setCount(count + 1);
  };


  if(count === 1){
    return(
      <button onClick={handleClick} className="Button">Clicked {count} time</button> 
      );
  }
  else{
    return(
      <button onClick={handleClick} className="Button">Clicked {count} times</button>
    );
  }


}

