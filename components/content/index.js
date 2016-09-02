module.exports = function renderer(input, out) {
    out.write('content:[')
    input.renderBody(out);
    out.write('],');
}