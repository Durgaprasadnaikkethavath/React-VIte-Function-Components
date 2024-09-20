import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState();

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
    console.log("currentTask", currentTask);
  };

  const addTask = () => {
    if (currentTask) {
      setTasks([...tasks, currentTask]);
      setCurrentTask("");
    }
  };
  return (
    <>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter your task"
        onChange={handleChange}
      />
      <button onClick={() => addTask()}>submit</button>
      <ul>
        {tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
