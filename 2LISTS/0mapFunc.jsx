/*
0
Mapping function '.map()' explained here to explain for list example
'lists.jsx' when it is used.

.map() transforms a list of items into JSX by returning 
JSX for each item. 

*/

const numbers = [1,2,3,4]; 

const exponentialNumbers = numbers.map(function (number) {
    return number*number; 
}); //don't forget semicolon
//also arrow function could be used instread of using 'function' keyword
/*
Map function goes through each list and preforms 
the function for each item. 
*/

console.log(exponentialNumbers); 
//[1, 4, 9, 16]

