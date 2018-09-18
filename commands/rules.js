const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setColor('#41baea')
      .addField('__**Kalo-MC Rules**__', `[General Server Rules](http://forums.kalo-mc.com/index.php?threads/global-server-rules.2/)\n[Global Chat Rules](http://forums.kalo-mc.com/index.php?threads/global-chat-rules.5/)\n[Towny Rules](http://forums.kalo-mc.com/index.php?threads/towny-rules.4/)\n[Skyblock Rules](http://forums.kalo-mc.com/index.php?forums/skyblock-rules.14/)\n[Discord Rules](https://discord.gg/Qumt6yB)`)
    message.channel.send(embed)
    message.delete(3000);    
  };

  exports.conf = {
    aliases:['rules', 'r']
};

  exports.help = {
    name: 'rules',
    description: 'link to the rules for the discord server', 
    usage: `${process.env.PREFIX}rules`
};