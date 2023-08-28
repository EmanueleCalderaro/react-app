import { useState } from "react";

export default function App() {

  return (
    <div>
      <h1>Welcome</h1>
      <Greeting name = "Emanuele" />
      <Change />
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

      <button onClick={handleClick}>Update</button>

      <h2>Hello, {message}</h2>
      
    </div>
  );
}

