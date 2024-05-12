const SupportHandler = require('../SupportHandler');
class Level4SupportHandler extends SupportHandler {
    handleRequest(request) {
        return `Запит '${request}' оброблено на четвертому рівні підтримки`;
    }
}
module.exports = Level4SupportHandler;
