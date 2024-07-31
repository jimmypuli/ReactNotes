import * as React from 'react'

const myReducer = (state, action) => {
    switch(action.type){
        case 'INCREASE': 
        
        case 'DECREASE': 
    }
};

const App = () => {
    const [number, dispactedNumber] = React.useReducer(myReducer, []); 

    const handleClick = (event) => {
        console.log(event.type);
    }
    return (
        <div>
            <button onClick = {handleClick}>Increase</button>
            <button onClick = {handleClick}>Decrease</button> 
        </div>
    ); 

}

export default App; 