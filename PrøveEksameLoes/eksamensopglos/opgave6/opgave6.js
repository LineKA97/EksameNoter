//Lav en funktion terningKast, der returnerer et Promise.
// Dette Promise skal efter en tilfældig varighed på op til 2 sekunder generere et tilfældigt heltal mellem 1 og 6 og dernæst
// resolve med dette heltal som resultat.

//Lav en funktion toEnsTerninger(), der anvender funktionen terningKast til at kaste to terninger asynkront.
// Funktionen skal returnere et Promise der resolver til en boolean der angiver, om de to terninger er ens.

//Lav en funktion fordeling(antal), der kalder funktionen terningKast ansynkront antal gange
// og returnerer et Promise, som resolver til et array med
//a. Den procentvise fordelingen af kast.

function random(number) {  // [1,number]
    return Math.floor(Math.random() * number) + 1
}

function die() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(random(6))
        }, random(2) * 1000)
    })
}

function twoAlike() {
    return Promise.all(new Array(2).fill(0).map(d => die())).then(d => d[0] === d[1])
}

function distribution(count) {
    return Promise.all(new Array(count).fill(0).map(d => die()))
        .then(data => data.reduce((p, c) => {
            p[c - 1] = p[c - 1] + 1
            return p
        }, new Array(6).fill(0)).map(d => d / count))
}


distribution(7000).then(data => console.log(data))
