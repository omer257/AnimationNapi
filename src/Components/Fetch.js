import React from 'react'; 
// import styles from './App.css'; 
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './new.css'; 


function App() {
  console.log(styles)
  const [state,setState] = useState({loading:false,data:[]});

  function compare(a, b) {  
    let comparison = 0;
    comparison = a.title > b.title?1:-1;
    // if (a.title > b.title) {
    //   comparison = a.title > b.title?1:-1;
    // } else if (a.title  < b.title) {
    //   comparison = -1;
    // }
    return comparison;
  }
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => { 
        const startsWithN = data.filter((item) => item.title.startsWith("s")).sort(compare);
               setState({...state, data:startsWithN })
      });
  },[])
  
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
