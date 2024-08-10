import * as React from 'react'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='; 

const getAsynchStories = () => 
new Promise ((resolve,reject) => 
  setTimeout(
    () => reject({data: { stories: initialStories } }), 2000)
);

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

  const [stories, dispatchedStories] = React.useReducer(
    storiesReducer, 
    { data: [], isLoading: false, isError: false }
  );

  React.useEffect(() => {

    if(searchTerm === '') return; 
    dispatchedStories({type: 'STORIES_FETCH_INIT'}); 

    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())
      .then(result => {
        dispatchedStories({
          type: 'STORIES_FETCH_SUCCESS', 
          payload: result.hits, 
        });  
      })
    .catch(() => 
      dispatchedStories({type: 'STORIES_FETCH_FAILURE'})
    ); 
  }, [searchTerm]); 

  const handleRemoveStory = (item) => {
    dispatchedStories({
      type: 'REMOVE_STORY', 
      payload: item, 
    }); 
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }; 

  return(  
    <div>
      <h1>My Hacker Stories</h1> 

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />
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
