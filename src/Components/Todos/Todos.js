import React from "react";
import "./Todos.scss";
import Todo from "./Todo";
import uuid from "react-uuid";

const Todos = ({data,deleteTodos}) => {

	const renderTodos = () => {
		if(data.length){
		return(
				<ul>
					{ data.map(todo => <Todo key={todo.id} id={todo.id} content={todo.content} deleteTodos={deleteTodos} />)}
				</ul>
			)} else {
			return <p className="alertMessage">No todo's for today</p>
		}
		 
	}
		
	
	return(
			renderTodos()
			
		)
}

export default Todos;