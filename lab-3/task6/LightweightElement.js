class LightweightElement {
    constructor(tagName, attributes = {}, children = []) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.children = children;
    }

    appendChild(child) {
        this.children.push(child);
    }

    render() {
        const attributesString = Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('');
        const childrenString = this.children.map(child => child.render()).join('');
        return `<${this.tagName}${attributesString}>${childrenString}</${this.tagName}>`;
    }

    calculateMemoryUsage() {
        let memoryUsage = this.tagName.length * 2 + 4;
        memoryUsage += this.children.reduce((acc, cur) => acc + cur.calculateMemoryUsage(), 0);
        return memoryUsage;
    }
}
module.exports = LightweightElement;