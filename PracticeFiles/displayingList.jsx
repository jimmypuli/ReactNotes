const myFriends = [
  {
      First: 'Johan', 
      Last: 'Gallardo', 
      Age: 22, 
      OtherNames: 'Joan',
      Site: 'https://www.youtube.com',
  },
  {
      First: 'Michael',
      Last: 'Kassie',
      Age: 22, 
      OtherNames: 'N/A',
      Site: 'https://www.linkedin.com',
  },
  {
      First: 'Juvenson',
      Last: 'Pierre', 
      Age: 22, 
      OtherNames: 'N/A', 
      Site: 'https://www.google.com'
  },
]

function App() {
  return(
    <div>
      <Heading />
      <Searchbar/>
      <List />
      <BigHello/>
    </div>
  );
}

function Heading(){
  return(
    <h1>Employee Catalog</h1>
  );
}

function Searchbar(){
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

const BigHello = () => {
  return(
    <h1> HELLLO .... !!!</h1>

  );

}


function List(){
  return(
    <ul>
      {myFriends.map(function(item){
        return(
          <li>
            <span> {item.First}</span>
            <span> {item.Last} </span>
            <span> 
              <a href={item.Site}>site here</a>
            </span>
          </li>
        ); 
      })}
    </ul>
  );
}
