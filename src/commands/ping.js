const call = (arg, message, client) => {
    message.channel.send("pong")
};

const cmd = {command: 'ping', callback: call}
module.exports = {
    cmd
};