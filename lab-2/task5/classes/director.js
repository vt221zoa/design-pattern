class Director {
    constructor(builder) {
        this.builder = builder;
    }

    createCharacter() {
        return this.builder
            .setName("SunJiin")
            .setHeight("178")
            .setBuild("normal")
            .setHairColor("brown")
            .setEyeColor("brown")
            .setClothing("light armor")
            .setInventory(["hammer"])
            .build();
    }

    createEnemy() {
        return this.builder
            .setName("Sadys")
            .setHeight("180")
            .setBuild("normal")
            .setHairColor("black")
            .setEyeColor("red")
            .setClothing("robes")
            .setInventory(["magic staff"])
            .setEvilDeeds(["stealing a toy from SunJiin"])
            .setGoodDeeds(["good person"])
            .build();
    }
}

module.exports = Director;