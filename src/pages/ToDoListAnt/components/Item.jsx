import { useState } from 'react';
import { Row, Col, Space, Input, Button, Card, Form, Popconfirm } from 'antd';

function Item(props) {
  const {
    index,
    task,
    description,
    handleEditTask,
    handleDeleteTask,
  } = props;
  const [isEdit, setIsEdit] = useState(false);

  function renderTaskContent() {
    if (isEdit) {
      return (
        <Form
          name="edit-task"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{task: task, description: description }}
          onFinish={(values) => {
            handleEditTask(values, index);
            setIsEdit(false)
          }}
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
          <Row gutter={16}>
            <Col span={12}>
              <Button type="primary" htmlType="submit" block>
                OK
              </Button>
            </Col>
            <Col span={12}>
              <Button htmlType="button" block onClick={() => setIsEdit(false)}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      )
    } else {
      return (
        <div style={{display: "flex", justifyContent:"space-between"}}>
          <div>
            <div>Task: {task}</div>
            <div>Description: {description}</div>
          </div>
            <Space>
            {!isEdit && (
              <Button type="link" onClick={() => setIsEdit(true)}>
                Edit
              </Button>
            )}
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => handleDeleteTask(index)}
              onCancel={() => null}
              okText="Yes"
              cancelText="No"
            >
              <Button type="link" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </div>
      )
    }
  }

  return (
    <Card
      size="small"
    >
      {renderTaskContent()}
    </Card>
  );
}

export default Item;
