const LightNode = require('./LightNode');

class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }
    accept(visitor) {
        visitor.visitTextNode(this);
    }
}

module.exports = LightTextNode;