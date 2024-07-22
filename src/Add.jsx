import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from './TaskSlice'

const Add = () => {
  const [text, settext] = useState({

    textt:"",
    isDone:false

  })
  const dispa=useDispatch()

  
  return (
    <div  className='add'>
      <h1>To do list</h1>
      <input onChange={(e)=>settext({...text,textt:e.target.value})} type="text" />
      <button onClick={()=>dispa(addtask(text))}>Add</button>

    </div>
  )
}

export default Add