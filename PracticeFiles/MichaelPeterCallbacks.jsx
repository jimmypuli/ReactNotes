import React, { useState } from 'react';

function App(){

  const [name, setName] = useState('_____');

  const eventHandler = (nameClicked) => {
    if(nameClicked == "Peter"){
      setName("Peter"); 
    }else if(nameClicked == "Michael"){
      setName("Michael")
    }
  }; 
  return(
      <div>
          <Peter funcP={eventHandler}/> 
          <Michael funcP={eventHandler}/>
          <p>{name} was clicked.</p>
      </div>
  );
}

function Peter(props){
  const PeterEventHandler = (event) => {
    console.log(event.target);
    props.funcP("Peter");
  }
  return(
      <button onClick={PeterEventHandler}>Peter Griffin</button>
  );
}

function Michael(props){
  const MichaelEventHandler = (event) => {
    console.log(event.target); 
    props.funcP("Michael")
  }
  return(
      <button onClick={MichaelEventHandler}>Michael Scott</button>
  )
}

export default App; 