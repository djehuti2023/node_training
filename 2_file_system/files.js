// Les imports
const fs = require('fs');

// Lecture de fichier
/* Pour se faire nous allons utiliser une
 fonction async
*/

/*
fs.readFile('./docs/blog1.txt', (err, data) =>{
    // En cas d'erreur
    if (err){
        console.log(err)
    }

     
    // Quand il n'y a pas d'erreur nous allons
    // utiliser la donnee recu par la fonction     
    
    // ==> <Buffer 53 61 6c 75 74 20 6e 69 6e 6a 61>
    //console.log(data);
    // ==> Salut ninja
    console.log(data.toString());
})
*/

// Ecriture dans un fichier
// Pour un fichier existant
/* 

fs.writeFile('./docs/blog1.txt', 'Salut le monde', () => {
    console.log('Le fichier a ete ecrit');
});

// Pour un fichier inexistant
fs.writeFile('./docs/blog2.txt', 'Salut le encore', () => {
    console.log('Le fichier a ete ecrit');
});

 */

// Les repertoires
// creer le repertoire assets la ou se trouve le fichier
// si le dossier en question n'existe pas

/* if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        //s'il y a erreur
        if (err){
            console.log(err);
        }
        // S'il a pas d'erreur
        console.log('Dossier cree');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('Dossier supprime');
    });
}

 */

// Suppression des fichiers
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        
        console.log('fichier supprime');

    });

}