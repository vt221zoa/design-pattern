const readline = require('readline');
const fs = require('fs');

class TextDocument {
    constructor(content) {2
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }
}

class TextEditor {
    constructor() {
        this.document = new TextDocument('');
        this.history = [];
    }

    getContent() {
        return this.document.getContent();
    }

    setContent(content) {
        const currentState = this.document.getContent();
        this.history.push(currentState);
        this.document.setContent(content);
    }

    undo() {
        if (this.history.length > 0) {
            const prevState = this.history.pop();
            this.document.setContent(prevState);
        } else {
            console.log('Undo history is empty.');
        }
    }

    saveToFile(filename) {
        const content = this.document.getContent();
        fs.writeFileSync(filename, content);
        console.log(`Document saved to ${filename}.`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const editor = new TextEditor();

function printMenu() {
    console.clear();
    console.log('1. Save to file with custom name');
    console.log('2. Undo text');
    console.log('3. Edit content');
    console.log('4. Print current content');
    console.log('5. Exit and save');
    console.log('6. Exit without save');
}

function processChoice(choice) {
    switch (choice) {
        case '1':
            rl.question('Enter filename: ', (filename) => {
                editor.saveToFile(filename);
                printMenu();
                askForChoice();
            });
            break;
        case '2':
            console.log('Undoing...');
            editor.undo();
            console.log('Content after undo:');
            console.log(editor.getContent());
            break;
        case '3':
            rl.question('Enter new content: ', (content) => {
                editor.setContent(content);
                console.log('Content updated.');
                printMenu();
                askForChoice();
            });
            break;
        case '4':
            console.log('Current content:');
            console.log(editor.getContent());
            break;
        case '5':
            console.log('Saving and exiting...');
            editor.saveToFile('document.txt');
            rl.close();
            break;
        case '6':
            console.log('Exiting without save...');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please enter a number from 1 to 5.');
            printMenu();
            askForChoice();
            break;
    }
}

function askForChoice() {
    rl.question('Enter your choice: ', (choice) => {
        processChoice(choice);
        if (choice !== '5') {
            askForChoice();
        }
    });
}

printMenu();
askForChoice();
