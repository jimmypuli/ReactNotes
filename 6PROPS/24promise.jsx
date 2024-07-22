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

const getAsynchStories = () => 
  new Promise((resolve) =>
    setTimeout(
      () => resolve({data: { charactersList:
        RickMortyCharacters}}), 2000
    )
  ); 


const App = () => {
  const [charactersList, setCharacters] = React.useState([]); 

  React.useEffect(() => {
    getAsynchStories().then(result => {
      setCharacters(result.data.charactersList); 
    });
  }, []); 
  
  const handleRemoveItem = (character) => {
    const newCharacterList = charactersList.filter(
      (newListItem) => newListItem.ID !== character.ID
    ); 
    setCharacters(newCharacterList);
    console.log(character.ID);
  }
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