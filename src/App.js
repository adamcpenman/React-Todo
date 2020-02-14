import React, {useState} from 'react';
import ReactDOM from "react-dom";
import data from "./components/TodoComponents/TodoList";
import ToDo from "./components/TodoComponents/Todo";
import ToDoForm from "./components/TodoComponents/TodoForm";

function App(props) {
 const [ task, setTask ] = useState(data)
 console.log(task)
 
 const toggleItem = (event, itemId ) => {
    event.preventDefault();
    console.log(event)
    setTask({
      task: task.map(item => {
        console.log(task)
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

  const clearTasks = event => {
    event.preventDefault();
    setTask({
      task: task.filter(item => {
        return !item.completed;
      })
    });
  };

  const addItem = (event, itemName) => {
    // const newItem = {
    //   id: Date.now(),
    //   name: itemName,
    //   completed: false
    // };

    setTask({
      task: [...task]
    });
    // localStorage.setItem('tasks', JSON.stringify(newItem));
    // console.log(localStorage);
    // setTask(newItem);
    };
  
   return (
      <div className="App">
        <div className="header">
          <h2>Tasks</h2>
        </div>

        <div className="todo-list">
          {task.map((item) => (
            <ToDo
              key={item.id}
              item={item}
              onClick={e => toggleItem(e, item.id)}
            />
          ))}
        </div>
        <div className="btm-pge">
          <ToDoForm addItem={addItem} />
          <button className="clr-btn" onClick={clearTasks}>
            Clear tasks
          </button>
        </div>
      </div>
    );
  
}

export default App;

//NEW CODE



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//         tasks: data,
//         // tasks: localStorage.getItem("tasks")
//     };
//   }

//   toggleItem = (event, itemId ) => {
//     event.preventDefault();
//     this.setState({
//       tasks: this.state.tasks.map(item => {
//         if (item.id === itemId) {
//           return {
//             ...item,
//             completed: !item.completed
//           };
//         } else {
//           return item;
//       }
//     })
//     });
//   };

//   clearTasks = event => {
//     event.preventDefault();
//     this.setState({
//       tasks: this.state.tasks.filter(item => {
//         return !item.completed;
//       })
//     });
//   };

//   addItem = (event, itemName) => {
//     const newItem = {
//       id: Date.now(),
//       name: itemName,
//       completed: false
//     };

//     this.setState({
//       tasks: [...this.state.tasks, newItem]
//     });
//     localStorage.setItem('tasks', JSON.stringify(newItem));
//     console.log(localStorage);
//     this.setState({ newItem });
//     };
  
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
  
//    return (
//       <div className="App">
//         <div className="header">
//           <h2>Tasks</h2>
//         </div>

//         <div className="todo-list">
//           {this.state.tasks.map(item => (
//             <ToDo
//               key={item.id}
//               item={item}
//               onClick={e => this.toggleItem(e, item.id)}
//             />
//           ))}
//         </div>
//         <div className="btm-pge">
//           <ToDoForm addItem={this.addItem} />
//           <button className="clr-btn" onClick={this.clearTasks}>
//             Clear tasks
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

