import React, {Component, Fragment} from 'react';
import "./App.scss";
import uuid from "react-uuid";
import Todos from "./Components/Todos/Todos";
import Form from "./Components/Form/Form";

class App extends Component {

	state={
		todos:[
			{id:uuid(), content: "Buy water"},
			{id:uuid(), content: "Buy toilet paper"},
			{id:uuid(), content: "Buy bread"},
		]
	}

	deleteTodos = (id) => {
	    console.log(id);
		let todos = this.state.todos.filter(todo => {
			return todo.id !== id});
		this.setState({
			todos: todos
		})
	}

	addTodos = (newTodo) => {
		newTodo.id = uuid()
		let todos=[...this.state.todos,newTodo];
		this.setState({
			todos
		})
	
	}

	
	render() {
		

		return (
			<Fragment>
				<h1>TODO's</h1>
				<Todos data={this.state.todos} deleteTodos={this.deleteTodos} />
				<Form addTodos={this.addTodos}/>
			</Fragment>
			)
	}

}

export default App;