import React from 'react';
import { Form, Input, Button } from 'antd';
import { PropsTodo } from '../../interfaces';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 120px;
  width: 60%;
  font-size: 1.5em;
  text-align: center;
  color: #506d84;
`;

const TodoForm: React.FC<PropsTodo> = ({ onAddTodo }) => {
  
  const onFinish = (value: any): void => {
    const todo: string = value.todo;
    onAddTodo(todo);
  };

  return (
    <StyledContainer>
      <Form
        style={{ marginTop: '50px' }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Todo"
          name="todo"
          rules={[
            {
              required: true,
              message: 'Please input what todo!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Todo
          </Button>
        </Form.Item>
      </Form>
    </StyledContainer>
  );
};

export default TodoForm;
