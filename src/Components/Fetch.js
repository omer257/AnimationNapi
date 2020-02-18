import React from 'react'; 
// import styles from './App.css'; 
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './new.css'; 


function App() {
  console.log(styles);
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
    setState({...state, loading:true })

    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => { 
        const startsWithN = data.filter((item) => item.title.startsWith("s")).sort(compare);
               setState({...state, data:startsWithN,loading:false })
      });
  },[])
  if(state.loading){
    return "Loading...";
  }
  
  return (
    <div className="App">
      {state.data.map((item)=>{ 
        let className = item.title[item.title.length -1]==="e"?'mark':''
        return <div className={className} key={item.id}>{item.title}</div>
      })}
    </div>
  );
}

export default App;


// import React from 'react'; 
// import { useHttp } from '../Hooks/Http'

// function App() {
//   const [isLoading, fetchedData] = useHttp('http://jsonplaceholder.typicode.com/todos', []);

//   const todos = fetchedData
//     ? fetchedData.filter((item) => item.title.startsWith("s")).sort(compare)
//     : []; 

//   function compare(a, b) {
//     let comparison = 0;
//     comparison = a.title > b.title ? 1 : -1;
//     // if (a.title > b.title) {
//     //   comparison = a.title > b.title?1:-1;
//     // } else if (a.title  < b.title) {
//     //   comparison = -1;
//     // }
//     return comparison;
//   }

//   let content = <p>Loading characters...</p>;

//   if (!isLoading && todos && todos.length > 0) {
//     content = todos.map((item) => {
//       let className = item.title[item.title.length - 1] === "e" ? 'mark' : ''
//       return <div className={className} key={item.id}>{item.title}</div>
//     });
//   } else if (
//     !isLoading && (!todos || todos.length === 0)
//   ) {
//     content = <p>Could not fetch any data.</p>;
//   }
//   return content;
// }

// export default App;

