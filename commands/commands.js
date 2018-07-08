const Discord = module.require("discord.js");
  module.exports.run = async (client, message, args) => {
let ascii = [
` \`\`\`asciidoc
= Kalo-Bot Commands =


\`\`\` `];

  message.channel.send('This Command is Under Construction')
  
  }

    exports.conf = {
      aliases: ['commands', 'command', 'cmd', 'cmds']
    };
  
    exports.help = {
      name: 'commands',
      description: 'Display Commands in a list on flippable pages',
      usage: `${process.env.PREFIX}commands`
    };