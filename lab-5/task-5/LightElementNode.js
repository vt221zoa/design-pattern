const LightNode = require('./LightNode');

class LightElementNode extends LightNode {
    constructor(tagName, displayType, closingType, cssClasses, children, commandAttributes) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = cssClasses || [];
        this.children = children || [];
        this.commandAttributes = commandAttributes || [];
    }

    get outerHTML() {
        const attributes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        const commandAttrs = this.commandAttributes.map(attr => attr.toString()).join(' '); // Генерація атрибутів команди
        const openingTag = `<${this.tagName}${attributes}${commandAttrs ? ' ' + commandAttrs : ''}>`;
        const closingTag = this.closingType === 'single' ? '/' : '';
        const innerHTML = this.children.map(child => child.outerHTML || child.text || '').join('');
        return `${openingTag}${innerHTML}${closingTag}${this.tagName !== 'br' ? '</' + this.tagName + '>' : ''}`;
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML || child.text || '').join('');
    }
}

module.exports = LightElementNode;