// Import the express package
const express = require('express');
// Create an instance of express application
const app = express();
// Set the port number for the application to 3000
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Import and use the defined HTML routes
require('./routes/htmlRoutes')(app);
// Start the express application, listening on the specified port
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
