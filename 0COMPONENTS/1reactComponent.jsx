/*
additional notes for react components 
*/


function createTitle(name){
  return "Hi " + name; 
}

//variables can be defined here 

function App(){
  /*
  Variables declared in between(here) will be re-defined each time 
  this function runs.
  
  Declare variables outside component to avoid re-defining. 
  */ 
  return (
    <div>
      <h1>{createTitle("Jimmy")}</h1>

      <label htmlFor= "search">Search: </label>
      <input id = "search" type = "text" />
    </div>
  );
}

export default App; 