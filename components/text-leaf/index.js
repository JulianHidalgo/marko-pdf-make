module.exports = function(input, out) {
    var content = out.captureString(() => input.renderBody(out));
    if(content) out.write(JSON.stringify(content)+',');
}