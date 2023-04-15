## Practice ToDo List without VanillaJS DOM Manipulation + Express

A simple CRUD ToDo list app with user authentication, created as a project to practice vanilla JavaScript DOM manipulation without using React.

## Features

- User authentication with registration and login
- Bcrypt password hashing
- Create, Read, Update, and Delete ToDo items
- Vanilla JavaScript for frontend DOM manipulation
- Responsive design

## Technologies Used

- Front End: Vanilla JavaScript DOM manipulation
- Back End: Node.js, Express.js, MongoDB, Bcrypt

## Prerequisites

- Node.js v14 or later
- MongoDB

## Installation and Running

1. Download dependencies  
  `npm install`  


2. Replace `MONGO_URI` in `server.js` with your own MongoDB connection string


3. Run the application on localhost:3000  
  `npm start`


## File Structure

```

├── README.md
├── client
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   ├── todos.css
│   ├── todos.html
│   └── todos.js
├── package-lock.json
├── package.json
└── server
    ├── controllers
    │   ├── todoController.js
    │   └── userController.js
    ├── models
    │   └── userModel.js
    ├── routes
    │   ├── todoRoutes.js
    │   └── userRoutes.js
    └── server.js
