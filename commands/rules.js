const Discord = require("discord.js");
  
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
      .setTitle('__Discord Rules__')
      .setColor('#14bdf5')
      .setDescription('https://discord.gg/NYGjVkV\nor\nhttp://kalo-mc.com/index.php?pages/discord-rules/')
    message.channel.send(embed)
    message.delete(5000);    
  };

  exports.conf = {
    aliases:['rules', 'discordrules', 'drules']
};

  exports.help = {
    name: 'rules',
    description: 'link to the rules for the discord server', 
    usage: `${process.env.PREFIX}ip`
};