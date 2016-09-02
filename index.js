var template = require('marko').load(require.resolve('./template.marko'));

console.log(template.renderSync({ name:'Frank' }));