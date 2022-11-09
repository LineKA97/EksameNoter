const topUl = document.querySelector("#top")
const bottomUl = document.querySelector("#bottom")

topUl.onclick = view
bottomUl.onclick = close
let id;

function view(e) {
    if (id) {
        closeList(`list${id}`)
    }
    document.querySelector(`#list${e.target.id}`).hidden = false
    id = e.target.id
}

function close(e) {
    closeList(e.target.id)
}

function closeList() {
    document.querySelector(`#list${id}`).hidden = true
}