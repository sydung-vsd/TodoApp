import React,{useContext,useState} from 'react'
import { Input } from 'antd';
import {v4 as uuidv4} from 'uuid';

import Button from '../../../components/Button/Button';
import { Context } from '../ToDo';

function FormAdd() {
  const {taskList, setTaskList} = useContext(Context);
  const [task, setTask] = useState('');

  const handleChange = (e)=>{
    setTask(e.target.value);
  }

  const addTask = ()=>{
    const newTask = {
      id:uuidv4,
      task: task,
      createDate: moment().format()
    }
  }

  return (
    <div style={{display: 'flex', marginBottom: '20px'}}>
      <Input placeholder="Add task" style={{margin:'0 20px'}}/>
      <Button>Add</Button>
    </div>
  )
}

export default FormAdd