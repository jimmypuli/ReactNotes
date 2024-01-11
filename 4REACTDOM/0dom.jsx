/*
We know how a component is created and instantiated and 
we have done it with the List and Search components. But 
what about the App() component? 

Check src/main.jsx file and index.html in hacker-stories 
*/

//main.jsx 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//two libraries(React, ReactDOM) are imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  <!-- this is where the App component is instantiated -->
  </React.StrictMode>,
)
/*
The create root method expects an HTML element. The element 
used is from index.html with id = 'root'. once we have the root
we can call render with a JSX parameter sent to represent 
the entry point component(also called root component). Usually,
the entry point component is the instance of the App component
as shown above, but it can be other JSX too. 
*/


//index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div> <!-- this is the element where React inserts itself into the HTML starting with the App component -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

/*
index.html file is used to request the js file and render the HTML 
element where React inserts itself. 
*/