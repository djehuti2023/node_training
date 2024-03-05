// un tableau contenant le nom des gens
const people = ['ninja', 'ryu', 'chun-li', 'mario'];

const ages = [20, 25, 30, 35]

console.log(people);
// pour exporter la variable people pour au'il soit accessible 
// dans d'autres fichiers 

/*
module.exports = {
    people: people
}; 


module.exports = {
   people
};

*/

// importer les variables people et ages
module.exports = {
    people, ages
 };