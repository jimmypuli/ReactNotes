import * as React from 'react';

const myReducer = (state, action) => {
  switch(action.type){
      case 'INCREASE': 
          return state + 1; 
      
      case 'DECREASE': 
          return state - 1; 
      
      default:
          return state;
  }
};

const App = () => {
    const [number, dispatchedNumber] = React.useReducer(myReducer, 0); 

    const handleClick = (event) => {
        if(event.target.id === 'INCREASE'){
            dispatchedNumber({
                type: 'INCREASE'
            });
        } else if(event.target.id === 'DECREASE'){
            dispatchedNumber({
                type: 'DECREASE'
            });
        }
    }

    return (
        <div>
            <p>{number}</p>
            <button id='INCREASE' onClick={handleClick}>Increase</button>
            <button id='DECREASE' onClick={handleClick}>Decrease</button> 
        </div>
    ); 
}

export default App;
