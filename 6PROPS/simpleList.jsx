function App(){
    const officeEmployees = [
      {
        Name: 'Dwight',
      }, 
      {
        Name: 'Stanley',
      },
    ];
    return (
        <div>
            <h1>Title</h1>
            <SearchBar/>
            <hr /> 
            <EmployeesList list = {officeEmployees}/>
        </div>
    );
  }
  
  function SearchBar(){
    const handleChange = (event) => {
      console.log(event.nativeEvent);
      console.log(event.target.value);
    }
    return(
      <div>
        <label htmlFor = "search">Search: </label>
        <input id = "search" type = "text" onChange = {handleChange}/>
      </div>
    );
  }
  
  function EmployeesList(props) {
    return (
      <div>
      <ul>
        {
          props.list.map((employee) => {
            return <li>{employee.Name}</li>
  
          })
        }
      </ul>
    </div>
    );
  }