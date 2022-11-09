const express = require("express")
const app = express()
app.use(express.static("public"))
app.set("view engine", "pug")
app.set("views", "src/views")

const departments = new Map()
departments.set("dep1", {id: "dep1", name: "R&D", employees: ["hans", "gert"]})
departments.set("dep2", {id: "dep2", name: "Service", employees: ["niels", "ruth"]})
departments.set("dep3", {id: "dep3", name: "Shop", employees: ["per", "arne", "lise"]})


// De følgende endpoints templates skal ikke nødvendigvis alle anvendes. Så slet dem der ikke anvendes
app.get("/departments", (req, resp) => {
    resp.render("index.pug", {departments: Array.from(departments.values())})

})

app.get("/departments/:id", (req, resp) => {
    const department = departments.get(req.params.id)
    resp.send(department)

})
app.post("/", (req, resp) => {
    resp.send("POST TEST TEXT")
})
app.put("/", (req, resp) => {
    resp.send("PUT TEST TEXT")
})
app.patch("/", (req, resp) => {
    resp.send("PATCH TEST TEXT")
})

app.delete("/", (req, resp) => {
    resp.send("DELETE TEST TEXT")
})

app.listen(8080, () => {
    console.log("Listening on prt 8080...")
})



