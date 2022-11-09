function calculateSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b
    throw new Error("type is wrong")
}

function calculateArea(radius) {
    if (typeof radius === 'number')
        return Math.pow(radius, 2) * Math.PI
    throw new Error("type is wrong")
}

export {calculateSum, calculateArea}
