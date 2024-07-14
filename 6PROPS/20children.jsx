import * as React from 'react'

const App = () => {
  return(
    <div>
      <Button handleClick = {() => {console.log("Button 1 clicked.")}}>
          Button 1
      </Button>
      <Button handleClick = {() => {console.log("Button 2 clicked.")}}>
          Button 2
      </Button> 
    </div>
  ); 
}

const Button = ({handleClick, children}) => {
  return(
    <>
      <button onClick = {handleClick}>{children}</button>
    </>
  );
}


export default App; 