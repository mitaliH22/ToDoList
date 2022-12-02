import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], newId: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    this.props.handleSubmit(e);
  };

  render() {
    return (
      <div className="display">
        <h1>
          To-Do List <i class="bi bi-journal-check"></i>
        </h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="inputDisplay"
            placeholder="Add your task here..."
          />
          <button className='addBtn'> Add new task</button>
        </form>
      </div>
    );
  }
}

export default Display;