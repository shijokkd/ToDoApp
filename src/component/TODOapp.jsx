import React, { useState } from 'react'
import AddList from './AddList'
import ListTask from './ListTask'


function TODOapp() {
    const [task,setTask]=useState([])
    const addtasks =(title)=>{
        const newtask=[...task,{title}]
        setTask(newtask)

    }
    const removetask = (index)=>{
        const newtask =[...task]
        newtask.splice(index,1);
        setTask(newtask)
    }
  return (
    <>
     <div className='container bg-black w-[70vw] m-auto rounded-xl p-[15px] text-white  flex flex-col items-center font-bold'>
       <div className='headder text-[2em] text-center'>ToDo App</div>
       <div className='dotask'> ADD Task</div>
       <AddList addtasks={addtasks}/>
       <div className='dotask'></div>
       {task.map((item, index)=>(

       <ListTask task={item} removetask={removetask} index={index} key={index}/>
       ))}




     </div>
    </>
  )
}

export default TODOapp



