import React,{useState,useEffect} from 'react';

import './App.css';

function App() {

  const [joke,setjoke]=useState("loading");

  const newjoke=()=>{ fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe").
  then(res=>res.json())
  .then(res1=>{
    console.log(res1);
    setjoke(res1.value.joke);
  })

  };
  useEffect(()=>{
   newjoke()
  },[]);
  return (
    <div className="App">
      <h1>
        Jokes</h1>
        <h2>
        

      </h2>
      <h4>
        {joke}
      </h4>
      <button className ="btn-floating btn-large waves-effect waves-light red" onClick={()=>newjoke()} >+</button>
    </div>
  );
}

export default App;
