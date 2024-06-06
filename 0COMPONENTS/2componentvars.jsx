import * as React from 'react'

//put variables up here so that it is not rerun..

function App(){
    /* 
    If you declare a variable here in the function body it will be 
    rerendered everytime the function is called. 
    */
    const name = 'KDOt'; 


    return (
        <div>
            <h1>Hello {name}!</h1>
        </div>
    ); 
}

export default App; 