import * as React from 'react'

const App = () => {
  return(
    <div>
      <Button handleClick = {() => {console.log("Button 1 clicked.")}}>
          Button 1
      </Button>
      <Button type = "submit" handleClick = {() => {console.log("Button 2 clicked.")}}>
          Button 2
      </Button> 
    </div>
  ); 
}

const Button = ({type="button", handleClick, children}) => {
  return(
    <>
      <button type = {type} onClick = {handleClick}>{children}</button>
    </>
  );
}


export default App; 
