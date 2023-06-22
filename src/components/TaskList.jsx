import React, { useEffect, useState } from 'react';
import TaskListInput from './TaskListInput';
import '../style/TaskList.css';
import Task from './Task';
import useTaskManager from '../hooks/useTaskList';

function TaskList() {

  const { tasks, addTask, deleteTask, completeTask, editTask } = useTaskManager();
  
  return (
    <div>
      <TaskListInput onSubmit={addTask} />
      <div className='taskListContent'>

        {
          // task dentro del parentesis seria un objeto que contiene el texto
          tasks.map((task) =>
            <Task key={task.id} id={task.id} texto={task.texto} completed={task.completed} deleteTask={deleteTask}
              completeTask={completeTask} editTask={editTask} />
          )
        }
      </div>

    </div>
  )
}

export default TaskList;