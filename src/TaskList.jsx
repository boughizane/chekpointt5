import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const TaskList = () => {
  let tasks = useSelector((state) => state.taskslice.tasks);
  const [first, setfirst] = useState(0)
  return (
    <div className="list">
      <div>
        <button onClick={()=>setfirst(0)}>All</button>
        <button onClick={()=>setfirst(1)}>isDone</button>
        <button onClick={()=>setfirst(2)}>Not Done</button>
      </div>
      {first==0?tasks.map((el) => (<TaskCard el={el} />)):first==1?tasks.filter(el=>el.isDone==true).map((el) => (<TaskCard el={el} />)):tasks.filter(el=>el.isDone==false).map((el) => (<TaskCard el={el} />))}
    </div>
  );
};

export default TaskList;