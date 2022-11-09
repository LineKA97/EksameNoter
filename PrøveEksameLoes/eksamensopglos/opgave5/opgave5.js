//Lav en højere ordens funktion randomText(textArray),
// der tager et array af tekststrenge som parameter og returnerer en funktion,
// der returnerer en tilfældig tekststreng fra textArray.

function randomText(textArray) {
    if (!(textArray instanceof Array) || textArray.length === 0) {
        throw new Error("not valid array")
    }
    return () => {
        return textArray[Math.floor((Math.random() * textArray.length))]
    }
}


//Brug nu randomText funktionen og et array med navne på farver til at generere en randomColor funktion,
// der returnerer et tilfældigt farvenavn fra dette array.
const colors = ["red", "darkblue", "orange", "silver"]
const randomColor = randomText(colors)


//Lave en class Car med
//a. Private property model
//b. Private property color
//c. Metode toString(), som returnerer model og color i en tekststreng.

class Car {
    #model
    #color

    constructor(model, color) {
        this.#model = model
        this.#color = color
    }

    toJson() {
        return {model: this.#model, color: this.#color}
    }

    toString() {
        return JSON.stringify(this.toJson())
    }
}

const models = ["opel", "kia", "honda", "ford"]
const randomModel = randomText(models)

function randomCars(count, ranModel, ranColor) {
    return new Array(count).fill(0).map(d => new Car(ranModel(), ranColor()))
}

console.log(randomCars(6, randomModel, randomColor).map(c => c.toString()))


//Lav en højere ordens funktion randomCars,
// der returnerer et array med et antal Car objekter med tilfældig color og model properties.
// Funktionen skal tage følgende parametre:
//Det antal Car objekter der skal laves
//b. En funktion der returnerer en tilfældig farve tekst
//c. En funktion der returnerer en tilfældig model tekst