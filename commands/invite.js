const Discord = require("discord.js");
  module.exports.run = (client, message, args) => {
    
    message.channel.send('https://discord.gg/VTfnse9');
      message.delete()
  };

  exports.conf = {aliases:[]};
  exports.help = {
    name: 'invite',
    description: 'Invite link for KalopsiaMC Discord', 
    usage: `${process.env.PREFIX}ip`}