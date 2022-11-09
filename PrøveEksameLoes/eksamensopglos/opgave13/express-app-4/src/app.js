const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "pug")
app.set("views", "src/views")


const map = new Map()
map.set("id1", {id: "id1", name: "hans", department: "R&D"})
map.set("id2", {id: "id2", name: "hansine", department: "Service"})
map.set("id3", {id: "id3", name: "line", department: "Shop"})

// De følgende endpoints templates skal ikke nødvendigvis alle anvendes. Så slet dem der ikke anvendes
app.get("/employees", (req, resp) => {
    resp.render("index.pug", {employees: Array.from(map.values())})

})

app.patch("/employees/:id", (req, resp) => {
    map.get(req.params.id).department = req.body.department
    resp.send(map.get(req.params.id))
})

app.listen(8080, () => {
    console.log("Listening on prt 8080...")
})



