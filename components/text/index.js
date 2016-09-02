module.exports = function renderer(input, out) {
    var renderBody = input.renderBody;
    delete input.renderBody;

    var inputKeys = input && Object.keys(input);
    var hasInput = !!inputKeys.length;

    if(hasInput) {
        out.write('{ text:[');
    }

    if(renderBody) {
        renderBody(out);
    }

    if(hasInput) {
        out.write('],');
    }

    inputKeys.forEach(key => {
        var value = input[key];
        out.write(' '+key+':'+JSON.stringify(value));
    })

    if(hasInput) {
        out.write(' },')
    }
}