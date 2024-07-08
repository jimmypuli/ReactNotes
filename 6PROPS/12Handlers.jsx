import * as React from 'react'

function App() {
  const appHandleSearch = (event) => {
    console.log(event.target.value)
  }
  return(
    <div>
      <SearchBar searchEvent = {appHandleSearch}/>
    </div>
  );
}

const SearchBar = (props) => {
  const handleSearch = (event) => {
    console.log(event.target.value);
  }
  return(
    <div>
      <label htmlFor= "search">Search: </label>
      <input id = "search" type = "text" onChange={props.searchEvent}/> 
    </div>
  );
}

export default App; 