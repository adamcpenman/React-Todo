import React from "react";

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
    }
    handleChange = evemt => {
        this.setState({
            value: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();

        this.props.addItem(event, this.state.value);
        this.setState({
            value: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                value={this.state.value}
                onchange={this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}