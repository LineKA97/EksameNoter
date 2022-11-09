// testApp.js
import express from 'express'
import fetch from 'node-fetch'

const app = express();

app.use(express.json());

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) // OK
        throw new Error(respons.status);
    return response.json();
}

function generateUserTable(users) {
    let html = '<table>';
    for (let user of users) {
        html += '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

app.get('/', async (request, response) => {
    try {
        let users = await get(usersUrl);
        let html = genererUserTabel(users);
        response.send(html);
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.get('/json', async (request, response) => {
    try {
        let users = await get(usersUrl);
        response.send(users);
    } catch (e) {
        if (typeof e.message === 'number')
            response.sendStatus(e.message);
        else {
            response.send(e.name + ": " + e.message);
        }
    }
});

app.post('/', (request, response) => {
    response.send(request.body);
});

app.listen(8090, () => {
    console.log('Listening on port 8090 ...');
});





