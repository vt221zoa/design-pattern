const SupportHandler = require('../SupportHandler');
class Level3SupportHandler extends SupportHandler {
    handleRequest(request) {
        if (request === 'Проблема з обладнанням') {
            return 'Рішення: Зверніться до сервісного центру';
        } else {
            return super.handleRequest(request);
        }
    }
}
module.exports = Level3SupportHandler;
