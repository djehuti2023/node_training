const express = require('express');

// l'application express
const app = express();

// Ecoute sur le port 3000
app.listen(3000);

// Reception de la requete au serveur 
app.get('/',(req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about',(req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

//Redirection vers le about page
app.get('/about-us',(req, res) => {
    res.redirect('/about');
});

//La page 404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});