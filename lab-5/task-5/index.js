const LightElementNode = require('./LightElementNode');
const LightTextNode = require('./LightTextNode');
const Styles = require('./Styles');

const styles = new Styles();
styles.addStyle('color', 'blue');
styles.addStyle('font-size', '16px');
styles.addStyle('font-weight', 'bold');

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
]);

lightHtml.applyStyles(styles.getStyles());

console.log(lightHtml.outerHTML);