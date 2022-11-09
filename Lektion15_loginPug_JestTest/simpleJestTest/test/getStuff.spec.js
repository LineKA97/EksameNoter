//https://jsonplaceholder.typicode.com/users
import get from '../src/getStuff'

describe("GetStuff", () => {

    test("Get Users ", async () => {

        //prepare
        const url = 'https://jsonplaceholder.typicode.com/users'

        //act
        const result = await get(url)

        // Assert
        expect(result.length).toBe(10)
        expect(result[0].name).toBe('Leanne Graham')
    })
})