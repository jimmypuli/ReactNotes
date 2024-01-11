/*
Here we make the list and search into its own component in React. 
This is taken from the App() component to adjust for our 
applications' growing size.
*/

//updated App() component below
function App(){
    return(
        <div>
            <h1>My Hacker Stories</h1>

            <Search /> 

            <hr />

            <List /> 
        </div>
    );//don't forget semicolon
}

/*
Using '<List />' we are able to integrate
the List() component in our App() component.
This is called component instantiation. 
'<List />' can be written many times in 
the App() component as well as other 
components. These would create multiple 
instances of a component. 
JS CLASS AND REACT COMPONENT ARE NOT THE SAME.
*/


//our new List() component here 
function List() {
    return (
        <ul>
        {list.map(function(item) {
          return(
            <li key ={item.objectID}>{item.title}
            <span>
              <a href={item.url}> {item.title}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
            </li>
          ); 
        })}
        </ul>
    );//return 
}

//new Search() component here
function Search() {
  return(
    <div>
      <label htmlFor = "search">Search: </label>
      <input id="search" type="text"/> 
    </div> 
  );
}