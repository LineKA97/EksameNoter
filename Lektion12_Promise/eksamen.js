function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

function die(max) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(randomNumber(max) + 1)
        }, (randomNumber(1) + 1) * 1000)
    })
}

function two() {
    return Promise.all(
        new Array(2).fill(0).map(d => die(6)))
        .then(data => data[0] === data[1])
}

async function two1() {
    const data = await Promise.all(new Array(2).fill(0).map(d => die(6)))
    return data[0] === data[1]

}


two().then(data => console.log(data))

async function dist(numberOfThrows) {
    const distribution = new Array(6).fill(0)
    const res = await Promise.all(new Array(numberOfThrows).fill(0).map(d => die(6)))
    res.forEach(d => distribution[d - 1] = distribution[d - 1] + 1)
    return distribution.map(d => d / numberOfThrows)
}

async function dist1(numberOfThrows) {
    const res = await Promise.all(new Array(numberOfThrows).fill(0).map(d => die(6)))
    return res.reduce((prev, cur) => {
        prev[cur - 1] = prev[cur - 1] + 1
        return prev
    }, new Array(6).fill(0)).map(d => d / numberOfThrows)
}

dist1(1000).then(data => console.log(data))


