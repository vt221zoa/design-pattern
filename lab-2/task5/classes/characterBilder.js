class CharacterBuilder {
    constructor() {
        this.character = {};
    }

    setName(name) {
        this.character.name = name;
        return this
    }

    setHeight(height) {
        this.character.height = height;
        return this;
    }

    setBuild(build) {
        this.character.build = build;
        return this;
    }

    setHairColor(color) {
        this.character.hairColor = color;
        return this;
    }

    setEyeColor(color) {
        this.character.eyeColor = color;
        return this;
    }

    setClothing(clothing) {
        this.character.clothing = clothing;
        return this;
    }

    setInventory(inventory) {
        this.character.inventory = inventory;
        return this;
    }

    build() {
        return this.character;
    }
}

module.exports = CharacterBuilder;