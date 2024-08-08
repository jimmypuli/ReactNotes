import * as React from 'react'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='; 

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(''); 
  const [data, setData] = React.useState([]); 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 
  }
  React.useEffect(() => {
    if(searchTerm){
      fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json()) 
      .then((results) => setData(results.hits))
      .catch((error) => console.error(error))
    }
  }, [searchTerm]); 
    return(
        <div>
            <SearchBar searchFunc = {handleSearch}/>
            <MyList items={data}/>
        </div>
    ); 
}

const SearchBar = (props) => {
    return(
      <>
        <label>Search here: </label>
        <input onChange = {props.searchFunc} ></input>
      </>
    ); 
}

const MyList = ({items}) => {
  return(
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>{item.title}</li>
      ))}
    </ul>
  );
}

export default App; 