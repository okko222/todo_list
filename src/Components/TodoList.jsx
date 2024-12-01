import { Task } from "./Task";
import { AddTask } from "./AddTask";
import { useState } from "react";

export function TodoList() {
  const [todoList,setToDoList]=useState([]); 
  
  const [newTask,setNewTask]=useState("")
 
  const handleOnChange =(event)=>{
    setNewTask(event.target.value)
  }
  const handleAddButton =()=>{
    const  task={
      taskName:newTask,
      id:todoList.length==0?1:todoList[todoList.length-1].id+1,
      completed:false
    }
    setToDoList([...todoList,task])
  }

  const handleCompleteBtn=(id)=>{
   setToDoList(
    todoList.map((task)=>{
      if(task.id === id){
        return {...task,completed: true}
      }
      else 
       return task 
    })
   )
  }

  const handleDeleteBtn=(id)=>{
    setToDoList(todoList.filter((task)=>task.id!==id))
  }

  const Tasks = todoList.map((task)=>{
          
    return <Task value={task.taskName} key={task.id}  completed={task.completed} handleCompleteBtn={()=>handleCompleteBtn(task.id)} handleDeleteBtn={()=>handleDeleteBtn(task.id)}/>
  })

  return (
    <>
      <AddTask handleOnChange={handleOnChange} handleAddButton={handleAddButton}/>
      
      {
       Tasks.map((Task)=>{
        return Task
       })
      }
    </>
  );
}
