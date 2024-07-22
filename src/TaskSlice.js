import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
    {
        textt:"HOUSE OF THE DRAGON",
        isDone:false
    },
    {
        textt:"PRESION BREAK",
        isDone:true
    },
    {
        textt:"BREAKING BAD",
        isDone:true
    },
  ]
}

export const TaskSlice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    addtask:(state,action)=>{
      state.tasks=[...state.tasks,action.payload]
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {  addtask} = TaskSlice.actions

export default TaskSlice.reducer