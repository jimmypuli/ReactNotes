/*
0
JSX allows us to mix HTML with JS 
In the return of a component we can mix HTML with JS 
*/



const welcome = {
  greeting : 'Hey', 
  title : 'React', 
}; //object assignment

function App(){
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor= "search">Search: </label>
      <input id = "search" type = "text" />
    </div>
  )
}

export default App; 