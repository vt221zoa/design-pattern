const supportChain = require('./classes/supportChain');
const requests = ['Проблема з підключенням', 'Проблема зі швидкістю Інтернету', 'Проблема з обладнанням', 'Інша проблема'];

requests.forEach(request => {
    console.log(`Запит: '${request}'`);
    const result = supportChain.handleRequest(request);
    console.log(`Відповідь: ${result ? result : 'Немає відповіді'}`);
    console.log('----------------------------------------');
});