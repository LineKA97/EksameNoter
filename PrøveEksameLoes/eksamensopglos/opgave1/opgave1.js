//opgave 1
//Lav en funktion lessThan(a, b),
// der returnere en boolean,
// der angiver om a er mindre end b.
// Funktionen skal kunne sammenligne to tal eller to tekststrenge.
// Funktionen skal kaste en fejl, hvis de to parametre afviger fra ovennævnte.

function lessThan(a, b) {
    if (typeof a !== 'string' && typeof a != 'number' || typeof a !== typeof b) {
        throw new Error('Invalid types')
    }
    return a < b
}

//Lav en anden funktion minimum(array),
// der returnerer det mindste tal i arrayet med brug af funktionen lessThan
// og en for-løkke.
// Funktionen skal kaste en fejl, hvis parameteren array ikke er et Array eller er et tomt array.
function minimum(array) {
    if (!(array instanceof Array) || array.length === 0) {
        throw new Error('Invalid type not array og length>0')
    }
    let minimum = array[0]
    for (let m of array) {
        if (lessThan(m, minimum)) {
            minimum = m
        }
    }
    return minimum
}

//Lav en tredje funktion minimumText (array),
// der returnerer den mindste tekststreng i arrayet med brug af funktionen
// lessThan og metoden Array.prototype.reduce.
// Funktionen skal kaste en fejl, hvis parameteren array ikke er et Array eller er et tomt array
function minimumText(array) {
    if (!(array instanceof Array) || array.length === 0) {
        throw new Error('Invalid type not array og length>0')
    }
    return array.reduce((p, c) => lessThan(c, p) ? c : p)
}


console.log(minimumText(["h", "y", "1",  "l", "ss"]))