class Styles {
    constructor(styles) {
        this.styles = styles || {};
    }

    addStyle(property, value) {
        this.styles[property] = value;
    }

    removeStyle(property) {
        delete this.styles[property];
    }

    getStyles() {
        return this.styles;
    }

    getStyleString() {
        return Object.keys(this.styles).map(property => `${property}: ${this.styles[property]};`).join(' ');
    }
}

module.exports = Styles;
