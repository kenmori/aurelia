/**
 * Created by No51 on 2016/08/28.
 */



import {Todo} './todo';

export class App {
	constructor() {
		this.heading = "Todos";
		this.todos = [];
		this.todoDescription = '';
	}
	addTodo(){
		if(this.todoDescription) {
			this.todos.push(new Todo(this.todoDescription));
			this.todoDescription = '';
		}
	}
	removeTodo(todo) {
		let index = this.todos.indexOf(todo);
		if(index !== -1){
			this.todos.splice(index, i);
		}
	}
}