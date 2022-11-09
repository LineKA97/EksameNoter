const InpName = document.querySelector("#name")
const InpCount = document.querySelector("#count")
const InpTotal = document.querySelector("#total")
const butAdd = document.querySelector("#add")
const tbody = document.querySelector("#tbody")
butAdd.onclick = handleAdd

function handleAdd() {
    const name = InpName.value
    const count = InpCount.value
    if (!name || !Number.parseInt(count)) {
        alert("Input invalid")
    } else {
        addItem(name, count)
    }

}

function addItem(name, count) {
    tbody.innerHTML += `<tr><td>${name}</td><td>${count}</td></tr>`
    InpTotal.value = totalCount()
    InpCount.value = ""
    InpName.value = ""
}

function totalCount() {
    return Array.from(document.querySelectorAll("#tbody>tr>td:nth-child(2)"))
        .map(element => Number.parseInt(element.textContent))
        .reduce((p, c) => p + c)
}


