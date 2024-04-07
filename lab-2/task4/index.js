const Virus = require('./classes/virus');

const firstGenerationVirus = new Virus(1, 1, "Virus1", "Type1");
const secondGenerationVirus1 = firstGenerationVirus.clone();
const secondGenerationVirus2 = firstGenerationVirus.clone();
const thirdGenerationVirus1 = secondGenerationVirus1.clone();
const thirdGenerationVirus2 = secondGenerationVirus2.clone();

firstGenerationVirus.children.push(secondGenerationVirus1, secondGenerationVirus2);
secondGenerationVirus1.children.push(thirdGenerationVirus1);
secondGenerationVirus2.children.push(thirdGenerationVirus2);

console.log(firstGenerationVirus);
console.log(secondGenerationVirus1);
console.log(thirdGenerationVirus1);