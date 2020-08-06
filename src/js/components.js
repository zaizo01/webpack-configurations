import { Todo } from '../class';
import { todoList } from '../index';

// Referencias del HTML
const divTodoList       = document.querySelector('.todo-list');
const txtInput          = document.querySelector('.new-todo');
const btnDelete         = document.querySelector('.clear-completed');
const ulFilter          = document.querySelector('.filters');
const anchorFilter      = document.querySelectorAll('.filtro');

export const createdTodoHtml = ( todo ) => {
    const  htmlTodo = `
    <li class="${ (todo.completd) ? 'completed' : '' }" data-id="${ todo.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completd) ? 'chekend' : '' }>
			<label>${ todo.task }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );
    return div.firstElementChild;
}

//Eventos 
txtInput.addEventListener('keyup', ( event ) => {
    if( event.keyCode === 13 && txtInput.value.length > 0 ){
        console.log( txtInput.value );
        const nuevoTodo = new Todo( txtInput.value );
        todoList.newTodo( nuevoTodo );

        createdTodoHtml( nuevoTodo );
        txtInput.value = '';
      
    }
});

divTodoList.addEventListener('click', ( event ) => {
    const nameElement = event.target.localName; // indica si hiciste click a un input, label, button
    const todoElement = event.target.parentElement.parentElement;
    const todoId      = todoElement.getAttribute('data-id');
    
    if( nameElement.includes('input') ){
        todoList.markCompleted( todoId );
        todoElement.classList.toggle('completed');

    }
    else if( nameElement.includes('button') ){
        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElement );
    }
});

btnDelete.addEventListener('click', () => {
    todoList.deleteCompleted();

    for( let i = divTodoList.children.length-1; i >= 0; i-- ){
        const element = divTodoList.children[i];

        if( element.classList.contains('completed') ){
            divTodoList.removeChild( element );
        }
    }
});

ulFilter.addEventListener('click', ( event ) => {

    const filtro = event.target.text;
    if( !filtro ) { return; }

    anchorFilter.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for(const element of divTodoList.children ){

        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes':
                if( completed ){
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completed ){
                    element.classList.add('hidden');
                }
            break;
        }
    }
});