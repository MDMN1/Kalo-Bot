const ms = require ('ms');
const moment = require ('moment');
      require ('moment-duration-format');
const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {

  let duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
    
  const uptime = new Discord.RichEmbed()
        .setTitle('Uptime')
        .setColor('#41baea')
        .setDescription(`I have been alive for **${duration}**`)
  
  message.channel.send(uptime)
    message.delete()
};

    exports.conf = {aliases: ['up', 'started']}
    exports.help = {
    name: 'uptime',
    description: 'Shows how long the bot has been online for',
    usage: `${process.env.PREFIX}uptime`}