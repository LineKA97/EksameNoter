const inp = document.querySelector("#inp")
const addB = document.querySelector("#add")

addB.onclick = handleAdd

async function handleAdd() {
    console.log("handleAdd")
    const assignment = inp.value
    if(!assignment){
        alert("input invalid")
        return
    }
    const resp = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({name: assignment})
    })
    if (!resp.ok) {
        throw new Error("POST failed")
    }
    window.location.href = "/"
}