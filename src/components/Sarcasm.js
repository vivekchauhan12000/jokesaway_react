import React,{useState,useEffect} from 'react';


export default function Sarcasm() {
  const [joke,setjoke]=useState("loading");

  const newjoke=()=>{ fetch(`http://api.icndb.com/jokes/random?limitTo=[nerdy]`).
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
    <div>
      <h1>nerd</h1>

      
      <h1>
        Jokes</h1>
        
      <h4>
        {joke}
      </h4>
      <button className ="btn-floating btn-large waves-effect waves-light red" onClick={()=>newjoke()} >Next</button>
    </div>
  )
}
