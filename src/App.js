import React,{useState,useEffect} from 'react';

import './App.css';

function App() {

  const [joke,setjoke]=useState("loading");
  const [firstname,setfirstname]=useState("John");
  const [sname,setsname]=useState("Wich");


  const newjoke=(first,second)=>{ fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).
  then(res=>res.json())
  .then(res1=>{
    console.log(res1);
    setjoke(res1.value.joke);
  })

  };
  useEffect(()=>{
   newjoke(firstname,sname)
  },[]);
  return (
    <div className="App">
      <h1>
        Jokes</h1>
        <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text" value={sname} onChange={(e)=>setsname(e.target.value)}/>
      <h4>
        {joke}
      </h4>
      <button className ="btn-floating btn-large waves-effect waves-light red" onClick={()=>newjoke(firstname,sname)} >+</button>
    </div>
  );
}

export default App;
