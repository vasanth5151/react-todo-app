import React, {useState} from 'react';
import './App.css';

function App() {
  const [list, setList]= useState([]);
  const [input, setInput]= useState("");

  const addTodo = (todo)=>{
    const newTodo ={
      id: Math.random(),
      todo: todo,
    }

  setList([...list, newTodo])
  
  setInput("");
  };

  const deleteitem = (id)=>{
    const newlist = list.filter((todo)=>todo.id !== id);
    setList(newlist);
  }

  return (
    <div className='container'>

      <h1>TODO APP</h1>
      <input className='input-type' type="text" placeholder='type Here...' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button className='btn' onClick={()=> addTodo(input)}>Add todo</button>
      <ul className='listitem'>
        {list.map((todo)=> (
          <li key={todo.id}>
            {todo.todo}
            <button className='last-btn' onClick={()=> deleteitem(todo.id)}>&times;</button>
          </li> 
        ))}
      </ul>
      
    </div>
   
  );
}

export default App;
