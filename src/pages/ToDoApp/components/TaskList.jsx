import {useContext, useState} from 'react'
import moment from 'moment';


import { Table, Space,Select,  } from 'antd';

import Button from '../../../components/Button/Button';
import Context from '../../../store/Context';
import { useEffect } from 'react/cjs/react.production.min';

const {Option} = Select;

function TaskList() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const {taskList, setTaskList, btn:btnName} = useContext(Context) ;
  const [task,settask] = useState(taskList);

  useEffect(() => {
    if (btnName === 'Today') {
      const filter = taskList?.filter((item) => {
        return item?.createdDate === today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      });
      setTask(filter);
    } else if (btnTitle === 'nextDay') {
      const filter = data?.filter((d: ITodo) => {
        return d.createdDay > today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      });
      setTask(filter);
    } else if (btnTitle === 'lastDay') {
      const filter = data?.filter((d: ITodo) => {
        return d.createdDay < today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      });
      setTask(filter);
    } else {
      setTask(data);
    }
  }, [btnName, task]);

    const columns = [
        {
          title: 'Task',
          dataIndex: 'task',
          key: 'task',
          width: 150,
          render: text => <a>{text}</a>,
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          width: 150,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 150,
          render: (text, record) => (
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
              <Option value="jack">not-start</Option>
              <Option value="lucy">in_progess</Option>
              <Option value="disabled">completed</Option>
            </Select>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          width: 100,
          render: (text, record) => (
            <Space size="small">
              <Button>Delete</Button>
            </Space>
          ),
        },
      ];
      
      // const data = [
      //   {
      //     key: '1',
      //     task: 'code',
      //     date: '22/12/2022',
      //     status: 'no-start',
      //   },
      //   {
      //     key: '2',
      //     task: 'Jim Green',
      //     date: '12/07/2022',
      //     status: 'progess',
      //   },
      // ];

  return (
    <>
        <Table columns={columns} dataSource={state.tasklist} />
    </>
  )
}

export default TaskList