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
new Promise ((resolve) => 
  setTimeout(
    () => resolve({data: { stories: initialStories } }), 2000)
);


const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  );

  const [stories, setStories] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false); 

  const [isError, setIsError] = React.useState(false); 

  React.useEffect(() => {
    setIsLoading(true); 
    getAsynchStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false); 
    })
    .catch(() => setIsError(true)); 
  }, []); 

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    ); 
    setStories(newStories); 
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }; 

  const searchedStories = stories.filter(function (story){
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

      {isError && <p>Something went wrong... </p>}

      {isLoading ? (
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
