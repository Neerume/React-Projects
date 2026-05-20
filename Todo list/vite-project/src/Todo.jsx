import react, {useState} from 'react';


const Todo=()=>{

  const [task, setTask]= useState("");
  const[list, setList]=useState([]);

  const handleChange=(e)=>{
    setTask(e.target.value);
  }

  const addTask=()=>{
    if(task.trim()===""){
      alert("Enter task please");
      return;
    }
    setList([...list, task]);
    setTask("");
  }

  const deleteTask=(index)=>{
    const newList=list.filter((_,i) => i!==index);
    setList(newList);
  }

  const edit =(index)=>{
    setTask(list[index]);
    const newList= list.filter((_,i)=>i!==index);
    setList(newList);

  }
  const clear =()=>{
    setList([]);
  }

 return(
  <div>
    <h1>Todo List</h1>
    <input type="text" onChange={handleChange} value={task}/>
    <button onClick={addTask}>Add</button>
    <button onClick={clear}>Clear</button>

    {
      list.map((item,index)=>
      <div key={index}>
      <p>{item}</p>

      <button onClick={()=>deleteTask(index)}>Delete</button>
      <button onClick={()=>edit(index)}>Edit</button>
      </div>
      )
    }

  </div>
 );

}

export default Todo;