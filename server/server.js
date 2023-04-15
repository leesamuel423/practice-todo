const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const userRoutes = require(path.resolve(__dirname, './routes/userRoutes.js'));
const todoRoutes = require(path.resolve(__dirname, './routes/todoRoutes.js'));

// Handles parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/client', express.static(path.resolve(__dirname, '../client')));

// Forwards all requests from /api to apiRouter
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// Handles other routes
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/todos', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/todos.html'));
});


// Handles any other uknown routes
app.use((req, res) => res.sendStatus(404));

// Global Error Handler
app.use((err, req, res) => {
  // status is either one given in error or default 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  return res.status(statusCode).json({
    //error message from thrown error
    message: err.message,
  });
});

// Connect to MongoDB and start server
const MONGO_URI = 'mongodb+srv://leesamuel423:3zJqhrRTsq7wdeC6@cluster0.umrxrob.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI);

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// export statement
module.exports = app;