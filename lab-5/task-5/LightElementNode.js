const LightNode = require('./LightNode');
const Styles = require('./Styles');

class LightElementNode extends LightNode {
    constructor(tagName, displayType, closingType, cssClasses, children) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.cssClasses = cssClasses || [];
        this.children = children || [];
    }

    applyStyles(styles) {
        this.styles = new Styles(styles);
    }

    get outerHTML() {
        const attributes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        const styleAttribute = this.styles ? ` style="${this.styles.getStyleString()}"` : ''; 
        const openingTag = `<${this.tagName}${attributes}${styleAttribute}>`;
        const closingTag = this.closingType === 'single' ? '/' : '';
        const innerHTML = this.children.map(child => child.outerHTML || child.text || '').join('');
        return `${openingTag}${innerHTML}${closingTag}${this.tagName !== 'br' ? '</' + this.tagName + '>' : ''}`;
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML || child.text || '').join('');
    }
}

module.exports = LightElementNode;