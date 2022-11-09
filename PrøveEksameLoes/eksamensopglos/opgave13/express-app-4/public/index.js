const trs = () => Array.from(document.querySelectorAll("#tbody>tr"))
const inp = document.querySelector("#inp")

function updateDepartment(id, department) {
    const inp = document.querySelector(`#${id}>td:nth-child(2)`).textContent = department
}


function setHandlers() {
    trs().forEach(t => t.onclick = handleOnclick)
}

async function handleOnclick(e) {
    const department = inp.value
    const id = e.currentTarget.id

    if (!department) {
        alert("no department assigned")
    } else {
        patch(id, department)
            .then(data => updateDepartment(data.id, data.department))
            .catch(error => alert(error.message))
    }
}

async function patch(id, department) {
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({department: department})
    })
    if (!response.ok) {
        throw new Error("patch failed")
    }
    return response.json()

}

setHandlers()