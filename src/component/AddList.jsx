import React, {  useState } from 'react'

function AddList({addtasks}) {
    const [value,setValue]=useState("")
    const additem = ()=>{
        addtasks(value)
        setValue("")
    }
  return (
    <>
    <div>
        <input type="text" className=' text-black' placeholder='add new task'
        onChange={(e)=>{setValue(e.target.value)}} value={value}/> 
        <button className=' border-white border-2 rounded-lg hover:scale-105 hover:bg-white hover:text-black'
        onClick={additem}>ADD Task</button>

    </div>
    </>
  )
}

export default AddList
