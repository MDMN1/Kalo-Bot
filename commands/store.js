const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setTitle('__Kalo Store__')
      .setColor('#41baea')
      .setDescription(`[Kalo-MC Store](https://kalomc.craftingstore.net/)`)
    message.channel.send(embed)
    message.delete(3000);    
  };

  exports.conf = {
    aliases:['store', 'shop']
};

  exports.help = {
    name: 'store',
    description: 'Link for the KalopsiaMC store', 
    usage: `${process.env.PREFIX}ip`
};