import * as React from 'react'

function App() {
  const names = ["Fido", "Chain", "Link", "Fogell", "Evan", "Seth", "Jackie"];
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('searchHistory') || ''
  ); 

  const appHandleSearch = (event) => {
    setSearchTerm(event.target.value); 
    localStorage.setItem('searchHistory', event.target.value); 
  }
  const searchedNames = names.filter((name) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase()); 
  }); 


  return(
    <div>
      <SearchBar searchEvent = {appHandleSearch}/>
      <DisplayList namesList = {searchedNames}/> 
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

const DisplayList = ({namesList}) => {
  return(
    <ul>
      {namesList.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  ); 
}

export default App; 