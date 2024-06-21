//import * as React from 'react'
import React, { useState } from 'react';

function App(){
  return(
    <div>
      <DisplayNum/>
    </div>
  );
}

function DisplayNum(){
  const [myNum, setMyNum] = useState(0); 
  const IncrementVar = () => {
    setMyNum(myNum+1); 
  };
  return(
    <div>
      <p>{myNum}</p>
      <button type="button" onClick={IncrementVar}>Increment</button>
    </div>
  ); 
}


export default App; 