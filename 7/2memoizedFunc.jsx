import * as React from 'react'

const App = () => {
  const handleWelcome = React.useCallback(() => {
    console.log("hello1")
    console.log("hello2")
  })

  React.useEffect(() => {
    handleWelcome(); 
  }, []) ;
  return(
    <div> 

    </div>
  );   
}


export default App; 