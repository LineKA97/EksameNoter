const express = require("express")
const app = express()
const session = require('express-session');
app.set('view engine', 'pug')
app.set('views', "src/views")
app.use(express.static("public"))
app.use(session({secret: 'mySecret', saveUninitialized: true, resave: true}));
app.use(express.json());

app.get("/", (req, resp) => {
    if (!req.session.assignments) {
        req.session.assignments = []
    }
    const assignments = req.session.assignments
    console.log("ASSIGNMENTS" + assignments)
    resp.render("index.pug", {assignments: assignments})
})
app.post("/", (req, resp) => {
    if (!req.session.assignments) {
        req.session.assignments = []
    }
    req.session.assignments.push(req.body.name)
    resp.sendStatus(200)
})


app.listen(8080, () => {
    console.log("Listening on port 8080...")
})
