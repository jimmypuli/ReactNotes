import * as React from 'react'


const RickMortyCharacters = [
    {
        Name: "Rick Sanchez",
        Age: "58",
        Gender: "M",
        ID: 0
    },
    {
        Name: "Morty Smith",
        Age: "15", 
        Gender: "M",
        ID: 1
    },
    {
        Name: "Diane Sanchez", 
        Age: "40", 
        Gender: "F",
        ID: 2
    }, 
    {
        Name: "Jerry Smith",
        Age: "40", 
        Gender: "M",
        ID: 3
    },
    {
        Name: "Summer Smith", 
        Age: "17", 
        Gender: "F",
        ID: 4
    }
]; 

const getAsynchCharacters = () => 
new Promise((resolve) => 
    setTimeout(
        () => resolve({data: {characters: RickMortyCharacters}}), 2000
    )
);

const charactersReducer = (state, action) => {
    switch(action.type){
        case 'SET_CHARACTERS':
            return action.payload; 
        case 'REMOVE_CHARACTER':
            return state.filter(
                (character) => action.payload.ID !== character.ID
            ); 
    }
}; 


const App = () => {
  const [charactersList, dispatchedCharacters] = React.useReducer(charactersReducer, []); 
  
  const handleRemoveItem = (character) => { 
      dispatchedCharacters({
          type: 'REMOVE_CHARACTER',
          payload: character, 
      }); 
  }

  React.useEffect(() => {
      getAsynchCharacters()
        .then(result => {
            dispatchedCharacters({
                type: 'SET_CHARACTERS', 
                payload: result.data.characters,
            }); 
        }) 
  }, []); 

  return(
    <DisplayList myList={charactersList} removeItem= {handleRemoveItem}/> 
  ); 
}; 

const DisplayList = ({myList, removeItem}) => {
  return(
    <div>
      <h2>Characters</h2>
      <ul>
        {myList.map((character) => (
          <Item removeItem = {removeItem} key = {character.ID} character = {character}/>            
        ))}
      </ul>
    </div>
  );
};

const Item = ({character, removeItem}) => {
  const HandleButtonClick = () => {
    removeItem(character); 
  }
  return(
    <div>
      <li>
        <span>{character.Name} </span>
        <span>{character.Age} </span>
        <span>{character.Gender} </span>
        <button onClick = {HandleButtonClick}>Remove</button>
      </li>
    </div>
  ); 
}

export default App; //note