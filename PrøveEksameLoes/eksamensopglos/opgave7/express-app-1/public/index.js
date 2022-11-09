const map = new Map()
map.set(1, {id: 1, name: "hans", age: 48})
map.set(2, {id: 2, name: "ib", age: 28})
map.set(3, {id: 3, name: "bo", age: 78})
map.set(4, {id: 4, name: "niels", age: 58})
const data = () => Array.from(map.values())


const tbody = document.querySelector("#tbody")
const averageInp = document.querySelector("#average")


function handleOnClick(e) {
    map.delete(Number.parseInt(e.currentTarget.id.split(":")[1]))
    insertPersons(data())
}

function insertPerson(person) {
    tbody.innerHTML += `<tr id="p:${person.id}"><td>${person.name}</td><td>${person.age}</td></tr>`
}

function setOnClicks() {
    Array.from(document.querySelectorAll("#tbody>tr")).forEach(e => e.onclick = handleOnClick)
}

function average(data) {
    if (data.length === 0) {
        return 0;
    }
    return data.map(p => p.age).reduce((p, c) => p + c) / data.length
}

function insertPersons(data) {
    tbody.innerHTML=""
    data.forEach(p => insertPerson(p))
    setOnClicks()
    averageInp.value = average(data)
}

insertPersons(data())
