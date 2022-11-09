import {calculateArea, calculateSum} from '../src/calculateStuff'
describe("calculator sum ", () => {
    test("sum of 3 and 4 is 7 ", () => {
        //act
        const result = calculateSum(3, 4)
        // Assert
        expect(result).toBe(7)
    })
    test("sum of 'a' and 4 throws Error ", () => {
        //Prepare
        const act = () => {
            calculateSum("a", 4)
        }
        // Act and assert
        expect(act).toThrow(Error)
        expect(act).toThrow("type is wrong")
    })
})

describe("calculator area ", () => {
    test("Area of circle radius 2 is 4*PI ", () => {
        //act
        const result = calculateArea(2)
        // Assert
        expect(result).toBe((4 * Math.PI))
    })
    test("radius of 'a' throws Error ", () => {
        //Prepare
        const act = () => {
            calculateArea("a")
        }
        // Act and assert
        expect(act).toThrow(Error)
        expect(act).toThrow("type is wrong")
    })
})