import * as React from 'react'

const sum = 0; 

const myReducer = (state, action) => {
    switch(action.type){
        case 'INCREASE': 
            sum += 1; 
        
        case 'DECREASE': 
            sum -= 1; 
    }
};

const App = () => {
    const [number, dispactedNumber] = React.useReducer(myReducer, []); 

    const handleClick = (event) => {
        if(event.id == 'INCREASE'){
            dispactedNumber({
                type: 'INCREASE',
                payload: 1, 
            });
        }else{
            dispactedNumber({
                type: 'DECREASE',
                payload: 1, 
            });
        }
    }
    return (
        <div>
            <p> {sum}</p>
            <button id='INCREASE' onClick={handleClick}>Increase</button>
            <button id='DECREASE' onClick={handleClick}>Decrease</button> 
        </div>
    ); 

}

export default App; 