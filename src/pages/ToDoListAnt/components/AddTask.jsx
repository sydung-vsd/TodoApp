import React from 'react'
import { Row, Input, Button, Card, Form } from 'antd';

function FormAdd({handleAddTask}) {
  const [addTaskForm] = Form.useForm();
  const addtask = (values)=>{
    handleAddTask(values);    
    addTaskForm.resetFields();
  }

  return (
    <>
    <Row justify="space-between">
        <h2 style={{margin:'auto'}}>TO DO LIST</h2>
      </Row>
      <Card  size="small">
        <Form
          form={addTaskForm}
          name="create-task"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ title: '', description: '' }}
          onFinish={(values) => addtask(values)}
        >
          <Form.Item
            label="Task"
            name="task"
            rules={[{ required: true, message: 'Please input your task!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form>
      </Card>
      </>
  )
}

export default FormAdd