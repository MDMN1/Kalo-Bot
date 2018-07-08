const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setTitle('__Kalo Store__')
      .setColor('#14bdf5')
      .setDescription('https://kalomc.craftingstore.net/')
    message.channel.send(embed)
    message.delete(5000);    
  };

  exports.conf = {
    aliases:['store', 'shop']
};

  exports.help = {
    name: 'store',
    description: 'Link for the KalopsiaMC store', 
    usage: `${process.env.PREFIX}ip`
};