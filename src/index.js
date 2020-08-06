import './style.css';
import { Todo, TodoList } from './class';
import { createdTodoHtml } from './js/components';

export const todoList = new TodoList();
todoList.todos.forEach( createdTodoHtml );