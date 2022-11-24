import React, { Component } from "react";
import Display from "./Components/Display";
import List from "./Components/List";

import "./App.css";
import "./App.scss";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], newId: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  localStr() {
    localStorage.setItem("document", JSON.stringify(this.state.items));
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      id: this.state.newId,
      label: e.target[0].value,
    };
    if (!newItem.label) {
      alert("Please enter a task");
      return false;
    }
    this.setState( {
      items: [...this.state.items, newItem.label],
      newId: this.state.newId + 1,
    })  
    e.target[0].value = "";
  };

  componentDidMount(){
    const documentData = JSON.parse(localStorage.getItem("document"));
    if (localStorage.getItem("document")) {
      this.setState({
        items: documentData || []
      });
    } else {
      this.setState({
        items: [],
        newId: ""
      })
    }
  }

componentDidUpdate(){
      this.localStr();
}

  deleteItem = (e) => {
    this.setState((state) => ({
      items: state.items.filter((item, i) => {
        return i !== e;
      }),
    }));
  };

  render() {
    return (
      <div className="App">
        <Display handleSubmit={this.handleSubmit} />
        <List
          value={this.state.items}
          deleteItem={this.deleteItem}
          key={this.state.newId}
        />
      </div>
    );
  }
}
