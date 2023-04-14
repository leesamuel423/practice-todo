document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const title = document.createElement('h1');
  title.innerText = 'This is the Index.js file title';
  document.querySelector('#root').appendChild(title);
});