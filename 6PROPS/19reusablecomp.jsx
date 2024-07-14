import * as React from 'react'

const App = () => {
  return(
    <>
      <Button label = "Button 1" handleClick = {() => {console.log("Button 1 clicked.")}}/> 
      <Button label = "Button 2" handleClick = {() => {console.log("Button 2 clicked.")}}/>
    </>
  ); 
}

const Button = ({label, handleClick}) => {
  return(
    <>
      <button onClick = {handleClick}>{label}</button>
    </>
  );
}


export default App; 