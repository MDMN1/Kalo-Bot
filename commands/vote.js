const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setColor('#41baea')
      .addField('__Server Vote Links__', '[Vote 1](https://minecraftservers.org/vote/506654)\n[Vote 2](https://minecraft-mp.com/server/199857/vote/)\n[Vote 3](https://topg.org/Minecraft/in-494606)')

    message.channel.send(embed)
    message.delete(5000);    
  };

  exports.conf = {
    aliases: ['vote', 'v']
};

  exports.help = {
    name: 'vote',
    description: 'Vote links for play.kalopsiamc.com', 
    usage: `${process.env.PREFIX}vote`
};