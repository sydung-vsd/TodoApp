import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  function handleAddTask(values) {
    setTaskList([
      values,
      ...taskList,
    ]);
  }

  function handleEditTask(values, index) {
    const newTaskList = taskList;
    newTaskList.splice(index, 1, values)
    setTaskList([...newTaskList]);
  }

  function handleDeleteTask(index) {
    const newTaskList = taskList;
    newTaskList.splice(index, 1);
    setTaskList([...newTaskList]);
  }

  return (
    <div style={{ width: 600, margin: '24px auto' }}>
      <AddTask
        handleAddTask={handleAddTask}
      />
      <TaskList
        taskList={taskList}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default ToDoList;
