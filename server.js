const http = require('http');
const fs = require('fs');
const _ = require('lodash');


// 1 - Creons le serveur
/* const server = http.createServer((req, res) => {
    console.log('requete effectue');
});

// Ecoutons les requetes sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log('ecoute sur le port 3000');
}); */

// Etudions comment repondre au client
/* const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.write('<p>Salut Ninja</p>');
    res.write('<p>Salut Encore</p>');
    // Finir la reponse du serveur
    res.end();
});

// Ecoutons les requetes sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log('ecoute sur le port 3000');
}); */


const server = http.createServer((req, res) => {
    
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Salut');
    });

    greet();
    
    
    res.setHeader('Content-Type', 'text/html');
    
    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;

    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // Finir la reponse du serveur
            res.end(data);
        }
    });
    
});

// Ecoutons les requetes sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log('ecoute sur le port 3000');
});