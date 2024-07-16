import * as React from 'react'

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );

  

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
    
      <List list = {searchedStories}/>
  
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

const List = (props) => (
    <ul>
      {props.list.map((item) => (
        <Item key = {item.objectID} item = {item}/>
      ))}
    </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href = {props.item.url}> {props.item.title} </a>
    </span>
    <span>{props.item.author} </span>
    <span>{props.item.num_comments} </span>
    <span>{props.item.points} </span>
  </li>
);


export default App; 