import * as React from 'react'

const myCustomHook = (key, initialState) => {
    const [value, setValue] = React.useState(
        localStorage.getItem('key') || initialState
    );

    React.useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key]);

    return [value, setValue]; 
}

function App() {
  const names = ["Fido", "Chain", "Link", "Fogell", "Evan", "Seth", "Jackie"];
  
  const [searchTerm, setSearchTerm] = myCustomHook('search', ''); 
//   const [searchTerm, setSearchTerm] = React.useState(
//     localStorage.getItem('searchHistory') || ''
//   ); 

//   React.useEffect(() => {
//     localStorage.setItem('searchHistory', searchTerm);
//   }, [searchTerm]);

  const appHandleSearch = (event) => {
    setSearchTerm(event.target.value); 
  }
  const searchedNames = names.filter((name) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase()); 
  }); 


  return(
    <div>
      <SearchBar searchHist = {searchTerm} searchEvent = {appHandleSearch}/>
      <DisplayList namesList = {searchedNames}/> 
    </div>
  );
}

const SearchBar = (props) => {
  return(
    <div>
      <label htmlFor= "search">Search: </label>
      <input id = "search" type = "text" value = {props.searchHist} onChange={props.searchEvent}/> 
    </div>
  );
}

const DisplayList = ({namesList}) => {
  return(
    <ul>
      {namesList.map((name, index) => (
        <li key = {index}>{name}</li>
      ))}
    </ul>
  ); 
}

export default App; 