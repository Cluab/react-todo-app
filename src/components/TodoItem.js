import React from 'react';
import styles from './TodoItem.module.css';
// import styling
class TodoItem extends React.Component {
  render() {
    // add a const for styling
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    // use destructuring to easily use the content
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        {/* use and if statmente for applying the style */}
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}

export default TodoItem;
