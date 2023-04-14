const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const userRoute = require('./routes/userRoutes.js');

// Handles parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// Forwards all requests from /api to apiRouter
app.use('/api/users', userRoute);

// Handles other routes
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
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
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(`err: ${err}`));


// export statement
module.exports = app;