import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
    {
        text:"HOUSE OF THE DRAGON",
        isDone:false
    },
    {
        text:"PRESION BREAK",
        isDone:true
    },
    {
        text:"BREAKING BAD",
        isDone:true
    },
  ]
}

export const TaskSlice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = TaskSlice.actions

export default TaskSlice.reducer