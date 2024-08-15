import * as React from 'react'; 
import axios from 'axios'; 

import './App.css'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='; 

const storiesReducer = (state, action) => {
  switch(action.type){
    case 'STORIES_FETCH_INIT':
      return {
          ...state, 
          isLoading: true, 
          isError: false, 
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
          ...state, 
          isLoading: false, 
          isError: false, 
          data: action.payload, 
      };
    case 'STORIES_FETCH_FAILURE': 
      return {
        ...state, 
        isLoading: false, 
        isError: true, 
      }; 
    case 'REMOVE_STORY': 
      return {
          ...state, 
          data: state.data.filter(
              (story) => action.payload.objectID !== story.objectID
          ),
      }; 
    default:
      throw new Error(); 
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  );

  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${searchTerm}`
  ); 

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value); 
  }

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`); 
    event.preventDefault(); //prevents rerendering 
  }

  const [stories, dispatchedStories] = React.useReducer(
    storiesReducer, 
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
      if(!searchTerm) return; 

      dispatchedStories({type: 'STORIES_FETCH_INIT'}); 

      try{
        const result = await axios.get(url); 

        dispatchedStories({
            type: 'STORIES_FETCH_SUCCESS', 
            payload: result.data.hits, 
        }); 
      } catch {
        dispatchedStories({type: 'STORIES_FETCH_FAILURE'}); 
      }
  },[url]); 
  
  React.useEffect(() => {
    handleFetchStories(); 
  }, [handleFetchStories]); 

  const handleRemoveStory = (item) => {
    dispatchedStories({
      type: 'REMOVE_STORY', 
      payload: item, 
    }); 
  };

  return(  
    <div className="container">
      <h1 className="headline-primary">My Hacker Stories</h1>
      

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      {stories.isError && <p>Something went wrong... </p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list = {stories.data} onRemoveItem={handleRemoveStory}/>
      )}
    </div>
  );
};

const SearchForm = ({
    searchTerm, 
    onSearchInput, 
    onSearchSubmit, 
}) => (
  <form onSubmit={onSearchSubmit} className="search-form">
    <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>
    <button
        type="button"
        disabled={!searchTerm}
        className="button button_large"
        onClick={onSearchSubmit}//changed it here
    >
        Submit
    </button>
    

  </form>
); 

const InputWithLabel = ({
    id,
    label,
    value,
    type = 'text',
    onInputChange, 
}) => (
    <>
    <label htmlFor={id} className="label">{label}</label>
    &nbsp;
    <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        className="input"
    />
    </>
); 

const List = ({list, onRemoveItem}) => (
    <ul>
      {list.map((item) => (
        <Item 
          key = {item.objectID} 
          item = {item}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
);

const Item = ({item, onRemoveItem}) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };
  return(
    <li className="item">
    <span style={{ width: '40%' }}>
      <a href = {item.url}> {item.title} </a>
    </span>
    <span style={{ width: '30%' }}>{item.author} </span>
    <span style={{ width: '10%' }}>{item.num_comments} </span>
    <span style={{ width: '10%' }}>{item.points} </span>
    <span style={{ width: '10%' }}>
      <button type="buttom" onClick={handleRemoveItem} className="button button_small">
        Dismiss
      </button>
    </span>
  </li>
  );
};


export default App; 
