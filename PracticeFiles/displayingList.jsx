
const myFriends = [
    {
        First: 'Johan', 
        Last: 'Gallardo', 
        Age: 22, 
        OtherNames: 'Joan',
    },
    {
        First: 'Michael',
        Last: 'Kassie',
        Age: 22, 
        OtherNames: 'N/A',
    },
    {
        First: 'Juvenson',
        Last: 'Pierre', 
        Age: 22, 
        OtherNames: 'N/A', 
    },
]

function App() {
    return(
        <ul>
            {myFriends.map(
                function(item){
                    <li>{item.First} {item.Last}</li>
                }
            )}
        </ul>
    )
}





