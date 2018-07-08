const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setTitle('__Server Vote Links__')
      .setColor('#14bdf5')
      .addField('Vote 1', 'http://vote1.kalo-mc.com/')
      .addField('Vote 2', 'http://vote2.kalo-mc.com/')
      .addField('Vote 3', 'http://vote3.kalo-mc.com/')
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