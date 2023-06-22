import React, { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = task => {
    task.texto = task.texto.trim();
    const taskListUpdated = [...tasks, task];
    setTasks(taskListUpdated);
    localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
  }

  const deleteTask = id => {
    const taskListUpdated = tasks.filter(task => task.id !== id);
    setTasks(taskListUpdated);
    localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
  }

  const completeTask = id => {
    const taskListUpdated = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(taskListUpdated);
    localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
  }

  const editTask = task => {
    const { id, texto } = task;
    const taskListUpdated = tasks.map(item => {
      if (item.id === id) {
        return { ...item, texto };
      }
      return item;
    });
    setTasks(taskListUpdated);
    localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
  };

  return {
    tasks,
    addTask,
    deleteTask,
    completeTask,
    editTask
  };
};

export default useTaskManager;
