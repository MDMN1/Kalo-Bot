const Discord = require("discord.js");
  module.exports.run = (client, message, args) => {
    
    const embed = new Discord.RichEmbed()
          .setTitle('__Kalo-Bot Dashboard__')
          .setColor('#41baea')
          .setDescription('[»»» Click Here «««](http://temp-dashboard.glitch.me/)')
    
  message.channel.send(embed)
    message.delete();    
};

    exports.conf = {aliases:['dash']}
    exports.help = {
    name: 'dashboard',
    description: 'Dashboard for Kalo-Bot', 
    usage: `${process.env.PREFIX}dashboard`}