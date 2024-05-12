const SupportHandler = require('../SupportHandler');

class Level1SupportHandler extends SupportHandler {
    handleRequest(request) {
        if (request === 'Проблема з підключенням') {
            return 'Рішення: Перезавантажте пристрій';
        } else {
            return super.handleRequest(request);
        }
    }
}

module.exports = Level1SupportHandler;
