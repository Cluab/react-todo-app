import React, { Component } from 'react';

// created input component
class InputTodo extends Component {
  // added empty state
  state = {
    title: '',
  };
  // create a function that targets the input text
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // create a function that makes sure that there is some text in the input if not returns an alert
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };
  render() {
    return (
      // create form with it's tags
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
