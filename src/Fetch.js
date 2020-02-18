import React from 'react'; 
import styles from './App.css'; 
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [state,setState] = useState({loading:false,data:[]});
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => { 
        const startsWithN = data.filter((item) => item.title.startsWith("s"));
        
        console.log(startsWithN);
               setState({...state, data:startsWithN })
      });
  },[])
  console.log(styles)
  return (
    <div className="App">
      {state.data.map((item)=>{ 
        let className = item.title[item.title.length -1]==="e"?'blue':'red'
        return <div className={className} key={item.id}>{item.title}</div>
      })}
    </div>
  );
}

export default App;
