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

    onCreated() {
        console.log(`Element <${this.tagName}> has been created.`);
    }

    onInserted() {
        console.log(`Element <${this.tagName}> has been inserted into the DOM.`);
    }

    onRemoved() {
        console.log(`Element <${this.tagName}> has been removed from the DOM.`);
    }

    onStylesApplied() {
        console.log(`Styles have been applied to element <${this.tagName}>.`);
    }

    onClassListApplied() {
        console.log(`Class list has been applied to element <${this.tagName}>.`);
    }

    onTextRendered() {
        console.log(`Text has been rendered within element <${this.tagName}>.`);
    }

    get outerHTML() {
        this.onCreated();

        const attributes = this.cssClasses.length > 0 ? ` class="${this.cssClasses.join(' ')}"` : '';
        const openingTag = `<${this.tagName}${attributes}>`;
        const closingTag = this.closingType === 'single' ? '/' : '';
        const innerHTML = this.children.map(child => child.outerHTML || child.text || '').join('');

        const html = `${openingTag}${innerHTML}${closingTag}${this.tagName !== 'br' ? '</' + this.tagName + '>' : ''}`;

        this.onInserted();

        return html;
    }

    get innerHTML() {
        this.onStylesApplied();
        this.onClassListApplied();

        return this.children.map(child => child.outerHTML || child.text || '').join('');
    }
}

module.exports = LightElementNode;
