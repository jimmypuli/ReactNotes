/*
Here we make a first attempt to display a list object in React
*/

const list = [
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

function App(){
    return (
        <div>
            <h1>My Hacker Stories</h1>
            
            <label htmlFor = "search">Search: </label>
            <input id = "search" type = "text" />

            <hr /> 

            <ul>
                {list.map(function(item){
                    return <li>{item.title}</li>; 
                })}
            </ul>
        </div>
    );//don't forget semicolon
    //mapping is used to map from a list of items to a list of HTML elements
}//end of App component

