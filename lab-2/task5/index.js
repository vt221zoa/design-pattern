const CharacterBuilder = require('./classes/characterBilder');
const EnemyBuilder = require('./classes/enemyBilder');
const Director = require('./classes/director');

function main() {
    const characterBuilder = new CharacterBuilder();
    const enemyBuilder = new EnemyBuilder();

    const director = new Director(characterBuilder);
    const hero = director.createCharacter();

    const enemyDirector = new Director(enemyBuilder);
    const enemy = enemyDirector.createEnemy();

    console.log("Hero:", hero);
    console.log("Enemy:", enemy);
}

main();