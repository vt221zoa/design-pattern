const LightNode = require('./LightNode');

class LightElementNode extends LightNode {
    constructor(tagName, displayType, closingType, cssClasses, children) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = cssClasses || [];
        this.children = children || [];
    }

    get outerHTML() {
        const attributes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        const openingTag = `<${this.tagName}${attributes}>`;
        const closingTag = this.closingType === 'single' ? '/' : '';
        const innerHTML = this.children.map(child => child.outerHTML || child.text || '').join('');
        return `${openingTag}${innerHTML}${closingTag}${this.tagName !== 'br' ? '</' + this.tagName + '>' : ''}`;
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML || child.text || '').join('');
    }
}

module.exports = LightElementNode;