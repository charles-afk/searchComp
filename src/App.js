import Search from './Search';
import { useState, useEffect } from 'react';
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    console.log(searchQuery)
  },[searchQuery])
  
  return (
    <div>
      <Search setSearchQuery={setSearchQuery}/>
    </div>
  );
}

export default App;
