const CharacterBuilder = require('./characterBilder');

class EnemyBuilder extends CharacterBuilder {
    constructor() {
        super();
    }

    setEvilDeeds(evilDeeds) {
        this.character.evilDeeds = evilDeeds;
        return this;
    }

    setGoodDeeds(goodDeeds) {
        this.character.goodDeeds = goodDeeds;
        return this;
    }
}

module.exports = EnemyBuilder;