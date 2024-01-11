/*
Important Note: We can display each item from a list, but
we need a key for every React element. A 'key' is an HTML 
attribute and should be a stable identifier. Luckily, our
object has an identifer we can use: 'objectID'. 
*/

function App(){
    return (
        <div>
            <h1>My Hacker Stories</h1>
            
            <label htmlFor = "search">Search: </label>
            <input id = "search" type = "text" />

            <hr /> 

            <ul>
                {list.map(function(item){
                    return <li key = {item.objectID}>{item.title}</li>; //change made here
                })}
            </ul>
        </div>
    );
}

/*
Keys are used to efficiently update/re-render a list if there are 
any changes made to the items. 

w/o keys 
<li>React</li>  ----->(update) <li>JavaScript</li> 
<li>Redux</li>  ----->(update) <li>React</li>
                ----->(insert) <li>Redux</li>

with keys
                ----->(insert) <li>JavaScript</li>
<li>React</li>  ----->(keep)   <li>React</li>
<li>Redux</li>  ----->(keep)   <li>Redux</li>

**as a last resort you can use the index of the item in the list too: 
*/

<ul>
    {list.map((item, index) => {
        return (
            <li key = {index}>
                {item.title}
            </li>
        );
    })}
</ul>
