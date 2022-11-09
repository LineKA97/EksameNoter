const data = [{name: "hans", age: 18}, {name: "åse", age: 38}, {name: "bo", age: 48}, {name: "ib", age: 58}]

const tbody = document.querySelector("#tbody")
const averageInp = document.querySelector("#average")


function handleOnClick(e) {
    e.currentTarget.remove()
    averageInp.value = average(data)
}

function insertPerson(person) {
    tbody.innerHTML += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`
}

function setOnClicks() {
    Array.from(document.querySelectorAll("#tbody>tr")).forEach(e => e.onclick = handleOnClick)
}

function average() {
    const dataElems = Array.from(document.querySelectorAll("#tbody>tr>td:nth-child(2)"))
    return dataElems.length === 0 ? 0 : dataElems.map(e => Number.parseInt(e.textContent)).reduce((p, c) => p + c) / dataElems.length
}

function insertPersons() {
    data.forEach(p => insertPerson(p))
    averageInp.value = average(data)
    setOnClicks()

}

insertPersons()
