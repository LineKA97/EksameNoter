const express = require("express")
const app = express()
app.use(express.static("public"))
app.set("view engine", "pug")
app.set("views", "src/views")

const map = new Map()
map.set("id1", {id: "id1", name: "kl1", students: ["hans", "ib", "niels"]})
map.set("id2", {id: "id2", name: "kl2", students: ["kurt", "bo", "ada"]})
map.set("id3", {id: "id3", name: "kl3", students: ["ilse", "rene", "kim"]})
map.set("id4", {id: "id4", name: "kl4", students: ["birger", "randolf", "gurli"]})

// De følgende endpoints templates skal ikke nødvendigvis alle anvendes. Så slet dem der ikke anvendes
app.get("/classes", (req, resp) => {
    resp.render("index.pug",{classes:Array.from(map.values())})
})
app.get("/classes/:id", (req, resp) => {
    const clazz = map.get(req.params.id)
    resp.send(clazz)

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



