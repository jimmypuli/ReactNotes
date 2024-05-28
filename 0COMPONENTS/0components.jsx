/* 
Components are described in PasCal case. 

Components are the foundation of React 
They represent funcationalities of a program. 
As the program grows more components are needed. 

Components in React begin with a capital letter. 

Components can be written in different formats 
Below are the different ways components can be written. 
In addition, these components can have different body styles. 
*/

//standard function declartion of a component
function Search(){
    return(
        <div> 
            <label htmlFor = "search">Search: </label>
            <input id = "search" type = "text" /> 
        </div>
    );
}

//arrow function declaration of a component
const Search = () => {
    //can run js logic here
    return(
        <div> 
            <label htmlFor = "search">Search: </label>
            <input id = "search" type = "text" /> 
        </div>
    );
}; 

/*The return statement can be omitted to be more concise. However, 
it may be needed if you want to do some business logic in 
betweeen the function signature and return statement. Check below.
*/

const Search = () => (//parenthesis(concise body) not block body 
    <div> 
        <label htmlFor = "search">Search: </label>
        <input id = "search" type = "text" /> 
    </div>
);//don't forget semicolon



/*

//Body styles: 
//Block body
const addOne = (count) => {
    //do any task in between 
    return count + 1; 
}; 

//Concise body (mulitple lines/multi line) - no curly braces and no return statement
//In a concise body, here implicit return statement is attached, so you can remove 
//the return statement.
const addOne = (count) => 
    count + 1; 

//Concise body - one line 
const addOne = (count) => count + 1; 


*/