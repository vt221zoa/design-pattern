const LightElementNode = require('./LightElementNode');
const LightTextNode = require('./LightTextNode');
const CommandAttribute = require('./CommandAttribute');

const lightHtml = new LightElementNode('div', 'block', 'double', ['container'], [
    new LightElementNode('h1', 'block', 'double', ['title'], [
        new LightTextNode('Hello, World!')
    ]),
    new LightElementNode('p', 'block', 'double', ['content'], [
        new LightTextNode('This is a paragraph inside a div.')
    ]),
    new LightElementNode('ul', 'block', 'double', ['list'], [
        new LightElementNode('li', 'block', 'double', [], [
            new LightTextNode('Item 1')
        ]),
        new LightElementNode('li', 'block', 'double', [], [
            new LightTextNode('Item 2')
        ]),
        new LightElementNode('li', 'block', 'double', [], [
            new LightTextNode('Item 3')
        ])
    ])
], [
    new CommandAttribute('data-custom', 'value') // Приклад атрибуту команди
]);

console.log(lightHtml.outerHTML);