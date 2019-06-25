var listaElement = document.querySelector('#trab ul');
var inputElement = document.querySelector('#trab input');
var buttonElement = document.querySelector('#trab button');

	
var tarefas =  JSON.parse(localStorage.getItem('list_todo'));


function criarTarefas(){
	
	listaElement.innerHTML = '';

	for(var tarefa of tarefas){
		
		var tarefaElement = document.createElement('li');
	
		var tarefaText = document.createTextNode(tarefa);
		
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');
		
		
		
		var pos = tarefas.indexOf(tarefa); 
	
		linkElement.setAttribute('onclick','deleteTarefa(' + pos + ')');
 		
		var linkText = document.createTextNode('Excluir');

		linkElement.appendChild(linkText);
		
		tarefaElement.appendChild(tarefaText);
	
		tarefaElement.appendChild(linkElement);
		
		listaElement.appendChild(tarefaElement);
		
	}
}

criarTarefas();

function addTarefa(){
	var tarefaText = inputElement.value;
	
	tarefas.push(tarefaText);
	inputElement.value = '';
	criarTarefas();
	saveToStorange();
}

buttonElement.onclick = addTarefa;



function deleteTarefa(pos) {
	tarefas.splice(pos, 1);
	criarTarefas();
	saveToStorange();
}



function saveToStorange(){
	localStorage.setItem('list_todo', JSON.stringify(tarefas));	
	
	
}






