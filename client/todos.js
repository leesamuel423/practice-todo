document.addEventListener('DOMContentLoaded', () => {
  console.log('ToDo DOM loaded');
  const todos = JSON.parse(localStorage.getItem('todos'));
  const title = document.createElement('h1');
  title.innerText = `ToDo List ${todos.username}`;
  document.querySelector('#todoHome').appendChild(title);


});