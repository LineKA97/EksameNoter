const trs = () => Array.from(document.querySelectorAll("#tbody>tr"))


function setHandlers() {
    trs().forEach(t => t.onclick = handleOnclick)
}

async function handleOnclick(e) {
    const id = e.currentTarget.id
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        throw new Error("delete failed")
    }
    document.querySelector(`#${id}`).style.backgroundColor = "red"
}

setHandlers()