const ulDeps = document.querySelector("#deps")
const ulEmps = document.querySelector("#emps")

ulDeps.onclick = handleDeps

async function handleDeps(e) {
    console.log(e.target.id)
    const resp = await fetch(`http://localhost:8080/departments/${e.target.id}`)
    if (!resp.ok) {
        throw new Error("Get failed")
    }
    const json = await resp.json()
    console.log(json)
    ulEmps.innerHTML=""
    json.employees.forEach(employee => ulEmps.innerHTML += `<li>${employee}</li>`)
}
