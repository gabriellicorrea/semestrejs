var listElement = document.querySelector('#tr ul');
var inputElement = document.querySelector('#trab input');
var buttonElement = document.querySelector('#trab button');

	
var todos = localStorage.getItem('list_tarefas');

function renderTodos(){
	
	listElement.innerHTML = '';

	for(var todo of todos){
		
		var todoElement = document.createElement('li');
	
		var todoText = document.createTextNode(todo);
		
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');
		
		var pos = tarefas.indexOf(todo); 
	
		linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');
 		
		var linkText = document.createTextNode('Excluir');

		linkElement.appendChild(linkText);
		
		todoElement.appendChild(todoText);
	
		todoElement.appendChild(linkElement);
		
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo(){
	var todoText = inputElement.value;
	
	todos.push(todoText);
	inputElement.value = '';
	
	renderTodos();
	
	saveToStorange();
}

buttonElement.onclick = addTodo();


function deleteTarefa(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveToStorange();
}


function saveToStorange(){
	localStorage.setItem('list_tarefas', JSON.stringify(todos));	
}





