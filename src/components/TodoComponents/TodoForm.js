import React, { useState } from "react";
import data from "./TodoList"



function ToDoForm(props) {
  const [tasks, setTasks] = useState(data)
       
const handleChange = event => {
        setTasks({
            ...tasks, [event.target.name]: event.target.value
        });
    };
    const handleSubmit = event => {
        event.preventDefault();
        props.addItem(tasks)
      
        setTasks({...tasks})
        console.log(tasks)
     
        // props.addItem(event)
        // setTasks({
        //   task
        // });
    };


  
        return (
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="add task"
                tasks={tasks}
                onChange={handleChange}
                />
                <button>Add</button>
            </form>
        );
    }


export default ToDoForm;


// import React, { useState } from "react";



// class ToDoForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             value: ""
//         };
//     }
//     handleChange = event => {
//         this.setState({
//             value: event.target.value
//         });
//     };
//     handleSubmit = event => {
//         event.preventDefault();

//         this.props.addItem(event, this.state.value);
//         this.setState({
//             value: ""
//         });
//     };


//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                 type="text"
//                 placeholder="add task"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 />
//                 <button>Add</button>
//             </form>
//         );
//     }
// }

// export default ToDoForm;
