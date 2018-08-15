const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
  
 let user = message.guild.member(message.mentions.users.first()) || message.guild.members.author;
  
  const embed = new Discord.RichEmbed()
  .setTitle(`${user}'s information`)
  .addField('Username','oof')
  .addField('UserID', 'oof')
  .addField('Status', 'oof')
  .addField('Roles','oof')
  
  message.channel.send(embed)
  message.delete()

  
  
};
exports.conf = {
aliases: ['userinfo', 'uinfo'] //u delete?    no, never added
};

exports.help = {
name: 'userinfo',
description: 'userinfo', 
usage: `${process.env.PREFIX}userinfo @user `
};