const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setTitle('__KalopsiaMC Rules__')
      .setColor('#14bdf5')
      .setDescription('http://kalo-mc.com/index.php?pages/server-rules/')
    message.channel.send(embed)
    message.delete(5000);    
  };

  exports.conf = {
    aliases:['mcrules']
};

  exports.help = {
    name: 'mcrules',
    description: 'Link for the rules on the kalo MC server', 
    usage: `${process.env.PREFIX}ip`
};