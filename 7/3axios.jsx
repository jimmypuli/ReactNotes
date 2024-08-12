import * as React from 'react'; 
import axios from 'axios'; 

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

  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`); 
  }

  const [stories, dispatchedStories] = React.useReducer(
    storiesReducer, 
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(() => {
      if(!searchTerm) return; 

      dispatchedStories({type: 'STORIES_FETCH_INIT'}); 

      axios
        .get(url)
        .then(result => {
          dispatchedStories({
            type: 'STORIES_FETCH_SUCCESS', 
            payload: result.data.hits, 
          });  
        })
      .catch(() => 
        dispatchedStories({type: 'STORIES_FETCH_FAILURE'})
      ); 
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
    <div>
      <h1>My Hacker Stories</h1> 

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearchInput}
      />
      <button
        type="button"
        disabled={!searchTerm}
        onClick={handleSearchSubmit}
      >
        Submit
      </button>
      <hr /> 

      {stories.isError && <p>Something went wrong... </p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list = {stories.data} onRemoveItem={handleRemoveStory}/>
      )}
    </div>
  );
};

const InputWithLabel = ({
    id,
    label,
    value,
    type = 'text',
    onInputChange, 
}) => (
    <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
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
    <li>
    <span>
      <a href = {item.url}> {item.title} </a>
    </span>
    <span>{item.author} </span>
    <span>{item.num_comments} </span>
    <span>{item.points} </span>
    <span>
      <button type="buttom" onClick={handleRemoveItem}>
        Dismiss
      </button>
    </span>
  </li>
  );
};


export default App; 
