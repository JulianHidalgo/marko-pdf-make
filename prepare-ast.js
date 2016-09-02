module.exports = function transform(el, context) {
    el.body.array.forEach(node => {
        if(node.type === 'Text' && node.parentNode.tagName !== 'text-leaf') {
            var leaf = context.createNodeForEl('text-leaf');
            node.wrapWith(leaf);
        }
    });

    if(!context.data.content) {
        var parentNode = el.parentNode;
        while(parentNode) {
            el = parentNode;
            parentNode = el.parentNode;
        }
        var content = context.createNodeForEl('top-wrapper');
        el.moveChildrenTo(content);
        el.appendChild(content);
        context.data.content = true;
    }
}