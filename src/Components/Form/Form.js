import React, {Component} from "react";
import "./Form.scss";

class Form extends Component{

	state={
		content: ""
	}

handleChange = (e) => {
	this.setState({
		content: e.target.value
	})
}

handleSubmit = (e) => {
	e.preventDefault();
	if(this.state.content !== ""){
	this.props.addTodos(this.state)}
	this.setState({
		content:""
	})
}


render(){
	return(
		<form onSubmit={this.handleSubmit}>
			<label forhtml="newTodo" >New todo item</label>
			<input value={this.state.content} onChange={this.handleChange} type="text" name="newTodo"  />
			<button className="submitButton" type="submit">Submit</button>
		</form>
		)
}
}

export default Form;