module.exports = function(input, out) {
    out.write('{ ');
    input.renderBody(out);
    out.write(' }');
}