import { useState, createContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';

import FormAdd from './components/FormAdd';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

export const Context = createContext()

export const initState={
  tasklist: [
      {
          id:uuidv4(),
          task:'task1',
          date:'17/04/2022',
          status:'completed',
      },
      {
          id:uuidv4(),
          task:'task2',
          date:'18/04/2022',
          status:'in_progess',
      },
      {
          id:uuidv4(),
          task:'task3',
          date:'18/04/2022',
          status:'not_start',
      },
  ]
}

function ToDoList() {
  const [taskList,setTaskList]=useState(initState.tasklist);
  const [btn, setBtn]=useState('');

  return (
    <Context.Provider value={{taskList, setTaskList, btn, setBtn}}>
      <div style={{width: 600, margin: '24px auto'}}>   
        <FormAdd></FormAdd>
        <Filter></Filter>
        <TaskList></TaskList>
      </div>
    </Context.Provider>
  );
}

export default ToDoList;
