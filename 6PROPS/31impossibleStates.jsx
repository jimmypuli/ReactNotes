import * as React from 'react'

const initialStories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, 
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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
    dispatchedStories({type: 'STORIES_FETCH_INIT'}); 

    getAsynchStories()
      .then(result => {
        dispatchedStories({
          type: 'STORIES_FETCH_SUCCESS', 
          payload: result.data.stories, 
        });  
      })
    .catch(() => 
      dispatchedStories({type: 'STORIES_FETCH_FAILURE'})
    ); 
  }, []); 

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

  const searchedStories = stories.data.filter(function (story){
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  }); 

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
        <List list = {searchedStories} onRemoveItem={handleRemoveStory}/>
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
