const LightNode = require('./LightNode');

class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }
}

module.exports = LightTextNode;