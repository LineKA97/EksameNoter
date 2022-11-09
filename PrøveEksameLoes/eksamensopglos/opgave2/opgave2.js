//Lav en class Cykel med følgende egenskaber
//a. Private property model, som skal valideres til at være en string
//b. Private property pris, som skal valideres til at være et number
//c. Metode toString() , der returnerer properties i en tekststreng.
//d. constructor skal kaste en fejl, hvis model eller pris ikke er angivet eller er af forkert type.

class Bike {
    #model
    #price
    static totalNumber = 0
    static totalPrice = 0

    constructor(model, price) {
        if (typeof model !== 'string' || typeof price !== 'number' || price < 0) {
            throw new Error(`invalid input model:${model} price:${price}`)
        }
        Bike.totalNumber += 1
        Bike.totalPrice += price
        this.#model = model
        this.#price = price
    }

    toJson() {
        return {model: this.#model, price: this.#price}
    }

    toString() {
        return JSON.stringify(this.toJson())
    }

    static averagePrice() {
        return Bike.totalNumber === 0 ? 0 : Bike.totalPrice / Bike.totalNumber
    }
}

//Lav en subklasse ElCykel med følgende egenskaber
//a. Private property raekkevidde, som skal valideres til at være et number
//b. Metode toString() overskrevet til at returnere alle properties i en streng
//c. constructor skal yderligere kaste en fejl, hvis raekkevidde ikke er angivet eller ikke er et number.

class EBike extends Bike {
    #actionRadius

    constructor(model, price, actionRadius) {
        if (typeof actionRadius !== 'number' || actionRadius <= 0) {
            throw new Error(`invalid input actionRadius:${actionRadius}`)
        }
        super(model, price);

        this.#actionRadius = actionRadius
    }

    toJson() {
        return {...super.toJson(), actionRadius: this.#actionRadius}
    }

    toString() {
        return JSON.stringify(this.toJson())
    }

}

//Lav et array med nogle cykelobjekter

//Statisk property totalAntal oprettede cykel objekter
//b. Statisk property samletpris for oprettede cykel objekter
//c. Når der oprettes et nyt cykelobjekt, skal disse properties opdateres.


//Tilføj en statisk metode gennemsnitsPris() på Cykel klassen, der returnerer gennemsnitsprisen for de oprettede cykel objekter


const bikes = [new EBike("1", 2, 1), new Bike("2", 3), new Bike("3", 4), new EBike("5", 6, 7)]
//Udskriv en liste med cyklerne i arrayet.

console.log(Bike.averagePrice())