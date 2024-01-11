/*
To handle a change and make our application more interactive, 
we need a function which can either be in the form of a 
function declaration or arrow function expression. 
*/

const Search = () => {
    const handleChange = (event) => {
        console.log(event);
        console.log(event.target.value);
    }; 

    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
        </div>
    );
}; //use semicolon for arrow function declaration of a component
//regular function declaration of components do not use semicolon

/*
if handleChange is a function 
which does not return a function
don't do this 

<input onChange={handleChange()} />

do this instead 
<input onChange={handleChange} /> 

*/
