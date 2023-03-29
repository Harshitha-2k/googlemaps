import React, { useState } from 'react';
import '../src/App.css';
import Maps from './Component/Maps';


function App() {
  const[search,setSearch]= useState(null);
  return (
  <div className='App'>
  <Maps />
  </div>
  )
}
export default App;