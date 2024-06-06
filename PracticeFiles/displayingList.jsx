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
        <h1>Amigos</h1>
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
      </div>
    );
  }
  