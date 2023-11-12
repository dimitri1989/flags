
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Flags from './Flags';
import './App.css';


function App() {
  const [flags,setflags] = useState([])
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(response =>setflags(response.data) )
  },[])
  return (
    <div className="App">
      <div className='container mt-5  d-flex flex-wrap justify-content-between '>
      
      {flags.map((flagItems,index)=>{
       return <Flags {...flagItems} key={index}/>
      })}
      </div>
    
    </div>
  );
}

export default App;
