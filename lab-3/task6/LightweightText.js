class LightweightText {
    constructor(text) {
        this.text = text;
    }

    render() {
        return this.text;
    }

    calculateMemoryUsage() {
        return this.text.length * 2;
    }
}

module.exports = LightweightText;
