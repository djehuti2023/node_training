/* Dans l'environement node, nous pouvons acceder a des fonctions
relative a la fenetre(windows) du navigateur. Pour voir ces fonctions,
 il faut se rendre dans console du navigateur et voir l'objet window.
 Dans notre cas ici l'objet window est le fichier global. nous pouvons
 donc appeler les fonction suivantes
 */


/* 
 
// cette fonction s'execute apres 3 seconde et en une fois
setTimeout(() =>{
    console.log('Dans le setTimeOut')
    
    // puis nous arretons la fonction setInterval()
    clearInterval(interv);
},3000);

// cette fonction s'execute chaque seconde
const interv = setInterval(() => {
    console.log('Dans interval')
}, 1000);
 
 */


// Pour obtenir chemin absolu du dossier ou se trouve le fichier actuel
console.log(__dirname);
// Pour obtenir chemin absolu du fichier actuel
console.log(__filename);
