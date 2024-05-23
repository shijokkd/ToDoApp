import React from 'react'

function ListTask({task,index,removetask}) {
  return (
    <>
    <div className=' text-white flex gap-5' >
        {task.title}
        <button onClick={()=>{removetask(index);}} className=' border-white border-2 rounded-lg hover:scale-105 hover:bg-white hover:text-black'>delete</button>

    </div>
    </>
   
  )
}

export default ListTask
