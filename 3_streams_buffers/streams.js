const fs = require('fs');

// Sans utiliser l'encodage
/* const readStream = fs.createReadStream('./docs/blog3.txt');

readStream.on('data', (chunk) => {
    console.log('=========== Nouveau chunk ============');
    console.log(chunk.toString());
}) */

// Utiliser l'encodage utf-8
/* const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('=========== Nouveau chunk ============');
    console.log(chunk);
}) */

// Ecrire les donnees dans le fichier avec le stream
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/* readStream.on('data', (chunk) => {
    console.log('=========== Nouveau chunk ============');
    console.log(chunk);
    writeStream.write('\n NEW CHUNK\n');
    writeStream.write(chunk);
    
}); */

//Ecrire dans un fichier en utilisant un pipe
// Prendre ce qu'il y a dans le readStream dans le writeStream
readStream.pipe(writeStream);