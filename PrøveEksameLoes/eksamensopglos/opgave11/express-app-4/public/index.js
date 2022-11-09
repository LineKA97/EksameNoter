const ulStud = document.querySelector("#students")
const ulClasses = document.querySelector("#classes")
ulClasses.onclick = handleClick

async function handleClick(e) {
    const resp = await fetch(`http://localhost:8080/classes/${e.target.id}`)
    if (!resp.ok) {
        throw new Error("Get failed")
    }
    const json = await resp.json()
    ulStud.innerHTML = ""
    const students = json.students
    students.forEach(s => ulStud.innerHTML += `<li>${s}</li>`)
}

