const LightElementNode = require('./LightElementNode');
const LightTextNode = require('./LightTextNode');

class HTMLIterator {
    constructor(rootNode) {
        this.rootNode = rootNode;
        this.queue = [rootNode];
        this.index = 0;
    }

    next() {
        if (this.index >= this.queue.length) {
            return { done: true };
        }

        const currentNode = this.queue[this.index];
        this.index++;

        if (currentNode instanceof LightElementNode) {
            this.queue.push(...currentNode.children);
        }

        return { value: currentNode, done: false };
    }
}

module.exports = HTMLIterator;

