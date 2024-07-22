import React from 'react'

const TaskCard = ({el}) => {
  return (
    <div className='card'  >
      <h1 style={el.isDone?{textDecoration:'line-through'}:null} >{el.textt}</h1>
    </div>
  )
}

export default TaskCard