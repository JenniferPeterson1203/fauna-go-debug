const { nanoid } = require("nanoid");
const animalPoints = require("../data/animalPoints.json");

//fix the misspelling in the animalName variable
function create(animals, animalName) {
  const animal = {
    name: animalName,
    id: nanoid(4),
    points: animalPoints[animalName] || 10,
  };
  animals.push(animal);
  return animals;
}

//exporting the create function
module.exports = { create };
