const express = require('express');
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

userRoute(app);

app.listen(port, () => {
    console.log('App rodando na port 3000')
});