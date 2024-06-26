import * as React from 'react'

function App(){
  const person = {
      firstName: "Hera",
      lastName: "Erm", 
      employer: "West Div LLC"

  }
  return(
    <div>
      <p>SBU</p>
      <Catalog personObj = {person}/>
    </div>
  );
}

const Catalog = ({personObj}) => {
  const {firstName, lastName, employer} = personObj; 
  return(
      <div>
          <p>{firstName} {lastName} {employer}</p>
      </div>
  );
}


export default App; 