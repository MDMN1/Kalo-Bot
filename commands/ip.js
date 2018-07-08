const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setTitle('__Server IP__')
      .setColor('#14bdf5')
      .setDescription('play.KalopsiaMC.com')
    message.channel.send(embed)
    message.delete(5000);    
  };

  exports.conf = {
    aliases:['']
};

  exports.help = {
    name: 'ip',
    description: 'IP for Kalo Minecraft Server', 
    usage: `${process.env.PREFIX}ip`
};