const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
 message.channel.send('https://discord.gg/45qWGNg');
    message.delete(5000);    
  };

  exports.conf = {
    aliases:['']
};

  exports.help = {
    name: 'invite',
    description: 'Invite link for KalopsiaMC Discord', 
    usage: `${process.env.PREFIX}ip`
};