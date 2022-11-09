import express from 'express'
import session from 'express-session'

import morgan from 'morgan'
import path from "path";
import {fileURLToPath} from 'url';
const PORT = process.env.PORT || 3100
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(session({secret: "MySecretThatShouldBeLonger", saveUninitialized: false, resave: false}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, '../', 'views'))
app.set('view engine', 'pug')

app.post('/login', (request, response) => {
    const {userName, password} = request.body
    if (password === '123' && userName) {
        request.session.userName = userName
        response.sendStatus(200)
    } else {
        response.sendStatus(400)
    }
})

app.get('/login', (request, response) => {
    response.render('login')
})

app.get('/logout', (request, response) => {
    request.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            response.redirect('/');
        }
    });
})

app.get('/', (request, response) => {
    if (request.session.userName) {
        response.render('frontpage', {userName: request.session.userName})
    } else {
        response.render('welcomePage')
    }
})


app.get('/test', (request, response) => {
    response.render('testPage', {message: "hello", listData: ["d1", "d2", "d3"], friends: 112, age: 23})
})
app.get('/test-layout', (request, response) => {
    response.render('testLayout')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
