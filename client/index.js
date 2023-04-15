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
  signInLabel.innerText = 'Log In';
  document.querySelector('#logIn').appendChild(signInLabel);
  const signInForm = document.createElement('form');
  signInForm.setAttribute('id', 'log-in-form');
  document.querySelector('#logIn').appendChild(signInForm);
  const username = document.createElement('input');
  username.setAttribute('type', 'text');
  username.setAttribute('id', 'log-in-username');
  username.setAttribute('placeholder', 'Username');
  document.querySelector('#logIn').appendChild(username);
  const password = document.createElement('input');
  password.setAttribute('type', 'password');
  password.setAttribute('id', 'log-in-password');
  password.setAttribute('placeholder', 'Password');
  document.querySelector('#logIn').appendChild(password);
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'log-in-submit');
  submit.setAttribute('value', 'Submit');
  document.querySelector('#logIn').appendChild(submit);


  // Sign up form
  const signUpDiv = document.createElement('div');
  signUpDiv.setAttribute('id', 'signUp');
  document.querySelector('#root').appendChild(signUpDiv);
  const signUp = document.createElement('h2');
  signUp.innerText = 'Sign Up';
  document.querySelector('#signUp').appendChild(signUp);
  const signUpForm = document.createElement('form');
  signUpForm.setAttribute('id', 'sign-up-form');
  document.querySelector('#signUp').appendChild(signUpForm);
  const suUsername = document.createElement('input');
  suUsername.setAttribute('type', 'text');
  suUsername.setAttribute('id', 'sign-up-username');
  suUsername.setAttribute('placeholder', 'Username');
  document.querySelector('#signUp').appendChild(suUsername);
  const suPassword = document.createElement('input');
  suPassword.setAttribute('type', 'password');
  suPassword.setAttribute('id', 'sign-up-password');
  suPassword.setAttribute('placeholder', 'Password');
  document.querySelector('#signUp').appendChild(suPassword);
  const suSubmit = document.createElement('input');
  suSubmit.setAttribute('type', 'submit');
  suSubmit.setAttribute('id', 'sign-up-submit');
  suSubmit.setAttribute('value', 'Submit');
  document.querySelector('#signUp').appendChild(suSubmit);


  // Event Listener for Log In
  document.querySelector('#log-in-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('#log-in-username').value;
    const password = document.querySelector('#log-in-password').value;
    const user = {
      username,
      password,
    };
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else throw new Error('Invalid username or password');
      })
      .then ((data) => {
        console.log(data);
        localStorage.setItem('todos', JSON.stringify(data.tasks));
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/todos';
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Event Listener for Sign Up
  document.querySelector('#sign-up-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('#sign-up-username').value;
    const password = document.querySelector('#sign-up-password').value;
    const user = {
      username,
      password,
    };
    console.log('This is the user in the sign up event listener: ', user, 'This is the end of the user');
    fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        console.log('THIS IS THE RESPONSE', res);
        if (res.status === 200) return res.json();
        else throw new Error('Username already exists. Please choose another username.');
      })
      .then ((data) => {
        console.log(data);
        localStorage.setItem('todos', JSON.stringify(data.tasks));
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/todos';
      })
      // need to add routing to the next page
      .catch((err) => {
        console.log('There was an error creating the user: ', err);
      });
  });

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