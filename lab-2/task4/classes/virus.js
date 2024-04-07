class Virus {
    constructor(weight, age, name, type) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.type = type;
        this.children = [];
    }

    clone() {
        const clone = new Virus(this.weight, this.age, this.name, this.type);
        clone.children = this.children.map(child => child.clone());
        return clone;
    }
}

module.exports = Virus;