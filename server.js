const express = require('express');
const bodyParser = require('body-parser');
const config = require('./app/common/env.config.js');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message" : "Hello Welcome.."});
});

require('./app/routes/patient.routes.js')(app);

// listen for requests
app.listen(config.Port, () => {
    console.log("Server is listening on port " + config.Port);
});