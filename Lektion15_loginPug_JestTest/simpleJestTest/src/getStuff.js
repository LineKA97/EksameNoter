import fetch from 'node-fetch'

async function get(url) {

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("call failed")
    }
    return await response.json()
}

export default get