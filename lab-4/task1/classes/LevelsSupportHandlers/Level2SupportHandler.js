const SupportHandler = require('../SupportHandler');

class Level2SupportHandler extends SupportHandler {
    handleRequest(request) {
        if (request === 'Проблема зі швидкістю Інтернету') {
            return 'Рішення: Перевірте підключення та налаштування маршрутизатора';
        } else {
            return super.handleRequest(request);
        }
    }
}
module.exports = Level2SupportHandler;
