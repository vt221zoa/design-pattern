class SupportHandler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    handleRequest(request) {
        if (this.nextHandler) {
            return this.nextHandler.handleRequest(request);
        }
        return 'Більше рівнів підтримки не знайдено';
    }
}

module.exports = SupportHandler;