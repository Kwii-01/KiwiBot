let normalizedPath = require("path").join(__dirname, "commands");
let cmds = [new Object()];

require("fs").readdirSync(normalizedPath).forEach( file => {
    cmds.push(require("./commands/" + file).cmd);
});

const callCmd = function(command, arg, message, client) {
    cmds.some(elem => {
        if (elem.command == command) {
            elem.callback(arg, message, client);
            return true;
        }
    });
};

module.exports = {
    callCmd
};