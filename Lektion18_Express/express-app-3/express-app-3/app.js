const express = require('express');
const app = express();
const hbs = require('pug');
const session = require('express-session');

app.set('view engine', 'pug');
app.set('views', 'templates');

app.use(express.static('filer'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));


app.get('/', function (request, response) {
    if (!session.textList) {
        session.textList = [{text: "text1"}]
    }
    response.render("index", {"list": session.textList})
});


app.post('/', async function (request, response) {
    console.log("IN POST")
    const body = await request.body
    if (!session.textList) {
        session.textList = []
    }
    session.textList.push(body)
    response.end()
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
