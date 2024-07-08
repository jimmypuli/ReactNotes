import * as React from 'react'

function App() {
  const names = ["Fido", "Chain", "Link", "Fogell", "Evan", "Seth", "Jackie"];
  const [searchTerm, setSearchTerm] = React.useState(''); 

  const appHandleSearch = (event) => {
    setSearchTerm(event.target.value); 
  }
  const searchedNames = names.filter((name) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase()); 
  }); 


  return(
    <div>
      <SearchBar searchEvent = {appHandleSearch}/>
      <NameDisplay name = {searchedNames}/>
    </div>
  );
}

const SearchBar = (props) => {
  return(
    <div>
      <label htmlFor= "search">Search: </label>
      <input id = "search" type = "text" onChange={props.searchEvent}/> 
    </div>
  );
}

const NameDisplay = (props) =>{
  return(
    <div>
      <p>{props.name}</p>
    </div>
  ); 
}

export default App; 