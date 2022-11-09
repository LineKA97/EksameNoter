function getData() {
    const value = document.querySelector("#newText").value
    if (!value) {
        throw new Error("empty text")
    } else {
        return {text: value}
    }
}


document.querySelector("#push").onclick = () => {
    try {
        console.log("PUSH")
        post(getData()).catch(error => setError(error))
        window.location.href = "http://localhost:8080/"
    } catch (error) {
        setError(error)
    }
}
document.querySelector("#newText").onfocus = () => {
    console.log("ONFOCUS")
    removeError()
}

function setError(error) {
    document.querySelector("#error").textContent = error
}

function removeError() {
    document.querySelector("#error").textContent = ""
}

async function post(data) {
    const response = await fetch("http://localhost:8080/", {
        method: "POST"
        , headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error("post failed")
    }

}

