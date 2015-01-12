var to5 = require("6to5");
var argv = require("minimist")(process.argv.slice(2));

module.exports = {
  process: function (src, filename) {
    // Use options passed in from the command line
    var options = argv;
    delete options._;
    options.filename = filename;

    // Ignore all files within node_modules
    // 6to5 files can be .js and .es6
    if (filename.indexOf("node_modules") === -1 && to5.canCompile(filename)) {
      return to5.transform(src, options).code;
    }
    return src;
  }
};
