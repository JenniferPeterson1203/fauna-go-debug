const { readJSONFile, writeJSONFile } = require("./src/helpers");

const {
  create,
  index,
  show,
  destroy,
  edit,
  score,
} = require("./src/animalController");

const animals = readJSONFile("./data", "animals.json");

const inform = console.log;
//add closing parenthesis to the function
function run() {
  const action = process.argv[2];
  const animal = process.argv[3];

  let writeToFile = false;
  let updatedAnimals = [];

  switch (action) {
    case "index":
      const animalsView = index(animals);
      inform(animalsView);
      break;
    case "create":
      updatedAnimals = create(animals, animal);
      writeToFile = true;
      break;
    case "show":
      const animalView = show(animals, animal);
      inform(animalView);
      break;
    case "update":
      updatedAnimals = edit(animals, animal, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedAnimals = destroy(animals, animal);
      writeToFile = true;
      break;
    case "score":
      inform(
        `Current points sum of all animals you've added to your database is`,
        score(animals)
      );
      break;
    default:
      inform("There was an error.");
  }

  if (writeToFile) {
    writeJSONFile("./data", "animals.json", updatedAnimals);
  }
}

run();
