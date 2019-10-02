import React from 'react';
import ReactDOM from "react-dom";
import Data from "./components/TodoComponents/TodoList";
import ToDo from "./components/TodoComponents/Todo";
import ToDoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tasks: Data
    };
  }

  toggleItem = (event, itemId ) => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
      }
    })
    });
  };

  clearTasks = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed;
      })
    });
  };

  addItem = (event, itemName) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      completed: false
    };

    this.state({
      tasks: [...this.state.tasks, newItem]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
