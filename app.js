const { request } = require('express');
const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.static('views'));


app.get('/', (request, response, next) => {response.sendFile(__dirname + "/views/home.html")
 })


// Server listening
app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));