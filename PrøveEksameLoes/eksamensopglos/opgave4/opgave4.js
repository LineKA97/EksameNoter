//Lav en kø class Queue med et underliggende private array som datastruktur. Køen skal konstrueres med et tomt array

//Køen skal have metoderne
//a. enqueue(elem), som indsætter et element i køen, og som kaster en fejl hvis elem er null eller undefined.
//b. dequeue(), som fjerner et element fra køen og returnerer det fjernede element. Hvis køen er tom kastes en fejl. Køen skal være en FIFO-datastruktur som ordet kø antyder.


//Tilføj et private array listeners til Queue klassen.

//Tilføj to yderligere to metoder
//a. addListener(listener), som tilføjer en listener til det underliggende listeners array og som kaster en fejl hvis listener ikke er af typen function.
//b. removeListener(listener), som fjerner en listener fra det underliggende array

//Udvid metoden enqueue(elem), så efter elementet er indsat i køen kalder alle listeners med det indsatte element som parameter.
// Det kræves at listeners kaldes ansynkront.

class Queue {
    #array
    #listeners

    constructor() {
        this.#array = []
        this.#listeners = []
    }

    enqueue(elem) {
        if (elem === undefined || elem === null) {
            throw new Error("element not defined")
        }
        this.#array.push(elem)
        this.#listeners.forEach(l => Promise.resolve(l).then(listener => listener(elem)))
    }

    dequeue() {
        if (this.#array.length === 0) {
            throw new Error("queue is empty")
        }
        return this.#array.shift()
    }

    addListener(listener) {
        if (typeof listener !== 'function') {
            throw new Error("listener not a function")
        }
        this.#listeners.push(listener)
    }

    removeListener(listener) {
        if (typeof listener !== 'function') {
            throw new Error("listener not a function")
        }
        const index = this.#listeners.indexOf(listener)
        if (index >= 0) {
            this.#listeners.splice(index, 1)
        }
    }
}

function listener1(element) {
    console.log("listener1", element)
}

function listener2(element) {
    console.log("listener2", element)
}

const queue = new Queue()
queue.addListener(listener1)
queue.addListener(listener2)
queue.enqueue(1)
queue.enqueue(2)
console.log("removing listener1")
queue.removeListener(listener1)
queue.enqueue(4)
queue.enqueue(5)