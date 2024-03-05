/*
Pour rendre le code plus simple a mettre a jour
en le mettant sous forme de module
*/

// 1 - pour importer le fichier people.js 
// const xyz = require('./people');

// 2 - importer les variables de people en 
// destructurant l'import
// const { people, ages} = require('./people')

// 3 - importer le module os
const os = require('os');

// acceder aux variables de people
// 1 - avec le premier import
// console.log(xyz.people);
// console.log(xyz.people, xyz.ages);

// 2 - Avec le second import
// console.log(people,ages);

// acceder aux variables de os
// Le repertoire de l'utilisateur ==> os.homedir()
// le systeme d'exploitation ==> os.platform(
console.log(os.platform(), os.homedir());