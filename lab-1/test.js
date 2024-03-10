const { Animal, Employee, Enclosure, Food, Inventory } = require('./classes');

const lion = new Animal('Lion', 'Mammal', 'Carnivore');
const zookeeper = new Employee('John Doe', 'Zookeeper');
const lionEnclosure = new Enclosure('Lion Enclosure', 'Large', 'Outdoor');
const meat = new Food('Meat', 'Carnivore');
const inventory = new Inventory();

lionEnclosure.addAnimal(lion);

zookeeper.feedAnimal(lion, meat);

inventory.addAnimal(lion);
inventory.addEmployee(zookeeper);

inventory.display();
