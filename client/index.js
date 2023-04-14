document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  const title = document.createElement('h1');
  title.innerText = 'Sam\'s ToDo List Practice';
  document.querySelector('#root').appendChild(title);

  // Log In Form
  const logInDiv = document.createElement('div');
  logInDiv.setAttribute('id', 'logIn');
  document.querySelector('#root').appendChild(logInDiv);
  const signInLabel = document.createElement('h2');
  signInLabel.innerText = 'Sign In';
  document.querySelector('#logIn').appendChild(signInLabel);
  const signInForm = document.createElement('form');
  signInForm.setAttribute('id', 'form');
  document.querySelector('#logIn').appendChild(signInForm);
  const username = document.createElement('input');
  username.setAttribute('type', 'text');
  username.setAttribute('id', 'username');
  username.setAttribute('placeholder', 'Username');
  document.querySelector('#logIn').appendChild(username);
  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('id', 'password');
  password.setAttribute('placeholder', 'Password');
  document.querySelector('#logIn').appendChild(password);
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'submit');
  submit.setAttribute('value', 'Submit');
  document.querySelector('#logIn').appendChild(submit);


  // Sign up form
  const signUpDiv = document.createElement('div');
  signUpDiv.setAttribute('id', 'signUp');
  document.querySelector('#root').appendChild(signUpDiv);
  const signUp = document.createElement('h2');
  signUp.innerText = 'Log In';
  document.querySelector('#signUp').appendChild(signUp);
  const signUpForm = document.createElement('form');
  signUpForm.setAttribute('id', 'form');
  document.querySelector('#signUp').appendChild(signUpForm);
  const suUsername = document.createElement('input');
  suUsername.setAttribute('type', 'text');
  suUsername.setAttribute('id', 'username');
  suUsername.setAttribute('placeholder', 'Username');
  document.querySelector('#signUp').appendChild(suUsername);
  const suPassword = document.createElement('input');
  suPassword.setAttribute('type', 'password');
  suPassword.setAttribute('id', 'password');
  suPassword.setAttribute('placeholder', 'Password');
  document.querySelector('#signUp').appendChild(suPassword);
  const suSubmit = document.createElement('input');
  suSubmit.setAttribute('type', 'submit');
  suSubmit.setAttribute('id', 'submit');
  suSubmit.setAttribute('value', 'Submit');
  document.querySelector('#signUp').appendChild(suSubmit);


});




/*

root
  - h1 'Sam's ToDo List Practice'
  - div id='logIn'
    - h2 'Log In'
    - form
      - input type='text' id='username' placeholder='Username'
      - input type='password' id='password' placeholder='Password'
      - input type='submit' id='submit' value='Submit'
  - div id='signUp'
    - h2 'Sign In'
    - form
      - input type='text' id='username' placeholder='Username'
      - input type='password' id='password' placeholder='Password'
      - input type='submit' id='submit' value='Submit'
*/