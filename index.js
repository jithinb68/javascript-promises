const express = require('express');
const app = express();

const port = process.env.PORT || 3000  

var courses = [
    'javascript',
    'php'
]

app.get('/', (request, response) => {
    response.send('Hello World')
})

app.get('/api/courses', (request, response) => {
    response.send(courses)
})

app.get('/api/courses/:id', (request, response) => {
    id = request.params.id
    response.send(courses[id]);
})

app.listen(3000, () => {
    console.log(`listening on port ${port}...`);
})

//helsw