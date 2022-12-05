import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

// create a parent component
class TodoContainer extends React.Component {
  // add a state that has some static tidos
  state = {
    todos: [
      {
        id: uuidv4(), // generate a unique id
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };
  // updates the state of the checkboxes
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  // deletes tasks
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  // add tasks to state
  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
