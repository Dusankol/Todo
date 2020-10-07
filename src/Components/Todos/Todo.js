import React from "react";

const Todo = ({content,deleteTodos,id}) => {
	return(
	<li onClick={() => deleteTodos(id)}><span className="content">{content}</span></li>
)}

export default Todo;