

// function saveTask() {
// 	let inputText = document.getElementById('taskInput').value;
// 	localStorage.setItem('task', inputText);
// }

// function loadTask() {
// 	let inputText = localStorage.getItem('task');
// 	document.getElementById('taskInput').value = inputText;
// }

let taskInput = document.getElementById('taskInput');

taskInput.addEventListener('input', function() {
	let inputValue = taskInput.value;
	localStorage.setItem('value' , inputValue)
});

window.addEventListener('load' , function(){
	let value = this.localStorage.getItem('value');
	
	if (value){
		taskInput.value = value;
	}
})


