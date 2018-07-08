const Discord = require("discord.js");
  module.exports.run = async (client, message, args) => {
  
  const embed = new Discord.RichEmbed()
    .setTitle("__Kalo-Bot Ping__")
     .setColor("#e0b72e")

   message.delete()
    message.channel.send(embed).then (msg => {
        embed.setColor("#53a124")
        embed.addField(`Latency:`, `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
        embed.addField("API:", `${Math.round(client.ping)}ms`, true)
        embed.setTimestamp()
        msg.edit(embed)
    })
};

  exports.conf = {
    aliases: ['ping', 'pong', 'p']
  };

  exports.help = {
    name: 'ping',
    description: 'pings the bot',
    usage: `${process.env.PREFIX}ping`
  };