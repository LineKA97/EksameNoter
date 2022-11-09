const express = require('express');
const app = express();
const hbs = require('pug');

app.set('view engine', 'pug');
app.set('views', 'templates');

app.use(express.static('filer'));
app.use(express.json());

const departments = [{id: "1", name: "afd1", employees: ["hans", "kurt"]}, {
    id: "2",
    name: "afd2",
    employees: ["grete", "ulla"]
}]


app.get('/', function (request, response) {
    response.render("index", {"departments": departments})
});

app.get('/:navn', function (request, response) {
    // implementer den relevante af disse tre endpoints
});

app.delete('/:navn', function (request, response) {
    // implementer den relevante af disset re endpoints
});

app.put('/:navn', function (request, response) {
    // implementer den relevante af disse tre endpoints
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
