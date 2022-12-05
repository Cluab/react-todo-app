import React from 'react';
import TodoItem from './TodoItem';

// create a component that wil house both the input and tasks
class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodoProps={this.props.deleteTodoProps}
            handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
