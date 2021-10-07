import { ITodo } from '../../interfaces';
import { Button, Checkbox, Popconfirm, message } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  color: #506d84;
  border: 1px solid #506d84;
  border-radius: 3px;
`;

const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const DoneTodo = styled.p`
  text-decoration: line-through;
`;

type TodoListProps = {
  todos: ITodo[];
  onToggleTodo(id: number): void;
  onDeleteTodo(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  const confirm = (id: number): void => {
    onDeleteTodo(id);
    message.success('Todo was deleted!');
  };

  const cancel = (e: any): void => {
    message.error('Todo was not deleted!');
  };

  if (!todos.length)
    return <StyledContainer>No todos! You can add one!</StyledContainer>;

  return (
    <StyledContainer>
      {todos &&
        todos.length &&
        todos.map(todo => {
          const { id, todoTitle, isCompleted } = todo;
          return (
            <StyledTodo key={id}>
              <Checkbox onChange={() => onToggleTodo(id)}></Checkbox>
              {isCompleted ? (
                <DoneTodo>{todoTitle}</DoneTodo>
              ) : (
                <p>{todoTitle}</p>
              )}
              <Popconfirm
                title="Are you sure to delete this todo?"
                onConfirm={() => confirm(id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger ghost>
                  <i className="fas fa-trash-alt"></i>
                </Button>
              </Popconfirm>
            </StyledTodo>
          );
        })}
    </StyledContainer>
  );
};

export default TodoList;
