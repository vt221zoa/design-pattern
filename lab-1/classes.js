class Animal {
    constructor(species, type, diet) {
        this.species = species;
        this.type = type;
        this.diet = diet;
    }
}

class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    feedAnimal(animal, food) {
        console.log(`${this.name} feeds ${animal.species} with ${food.name}.`);
    }
}

class Enclosure {
    constructor(name, size, type) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
        console.log(`${animal.species} added to ${this.name} enclosure.`);
    }
}

class Food {
    constructor(name, suitableFor) {
        this.name = name;
        this.suitableFor = suitableFor;
    }
}

class Inventory {
    constructor() {
        this.animals = [];
        this.employees = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    display() {
        console.log("Inventory:");
        console.log("Animals:", this.animals.map(animal => animal.species));
        console.log("Employees:", this.employees.map(employee => employee.name));
    }
}


module.exports = { Animal, Employee, Enclosure, Food, Inventory };