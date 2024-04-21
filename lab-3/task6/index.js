const LightElementNode = require('./LightElementNode');
const LightTextNode = require('./LightTextNode');
const LightweightElement = require('./LightweightElement');
const LightweightText = require('./LightweightText');
const fs = require('fs');
function transformTextToHTML(text) {
    const lines = text.split('\n');
    const html = new LightweightElement('div');

    let currentElement = null;

    for (let line of lines) {
        line = line.trim();
        if (line === '') continue;

        if (!currentElement) {
            currentElement = new LightweightElement('h1', {}, [new LightweightText(line)]);
        } else if (line.length < 20) {
            currentElement.appendChild(new LightweightElement('h2', {}, [new LightweightText(line)]));
        } else if (line.startsWith(' ')) {
            currentElement.appendChild(new LightweightElement('blockquote', {}, [new LightweightText(line)]));
        } else {
            html.appendChild(currentElement);
            currentElement = new LightweightElement('p', {}, [new LightweightText(line)]);
        }
    }

    if (currentElement) html.appendChild(currentElement);

    return html;
}

function readBookText(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.error('Error reading the file:', err);
        return null;
    }
}

const bookFilePath = 'book.txt';
const bookText = readBookText(bookFilePath);

if (bookText) {
    const htmlTree = transformTextToHTML(bookText);
    console.log(htmlTree.render());

    const memoryUsageBytes = htmlTree.calculateMemoryUsage();
    console.log(`Memory Usage: ${memoryUsageBytes} bytes`);
}