const conf = require("../etc/config.json");
const Discord = require('discord.js');
const Redditscrapper = require("./redditscrapper");
const commandHandler = require("./commandHandler");

const client = new Discord.Client();
const request_timer = 60000;

const kiwiBot = function() {
  Redditscrapper.scrapeSubreddit().then(data => {

  }).catch(error => {

  });
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(kiwiBot, request_timer);
});


client.on('guildCreate', guild => {
  console.log(guild.name);
});

client.on('guildDelete', guild => {
  console.log(guild.name);
});

client.on('message', msg => {
  if (!msg.content.startsWith(conf.prefix))
    return;
  let msgSplitted = msg.content.split(" ");
  let command = msgSplitted.shift().replace(conf.prefix, '');
  commandHandler.callCmd(command, msgSplitted, msg, client);
});


client.on('error', error => {
  console.log(error);
});


client.login(conf.token);