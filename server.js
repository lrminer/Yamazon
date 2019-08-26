// Server.js 
// Dependencies
const express = require('express');

// Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Static directory
app.use(express.static('./app/public'));

// Routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// Listen
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT + '\nhttp://localhost:' + PORT);
});