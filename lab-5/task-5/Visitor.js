class Visitor {
    visitTextNode(node) {
        //нічого не змінюємо
    }

    visitElementNode(node) {
        if (node.tagName === 'p') {
            node.cssClasses.push('upper-text');
        }
    }
}

module.exports = Visitor;
