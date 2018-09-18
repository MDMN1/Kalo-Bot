const db = require ('quick.db');
const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
   
    if(message.author.id == process.env.RAL || message.author.id == process.env.FREAK) { 
  
   const  errEmbed2 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('`Error`')
          .setDescription('```Please specify a channel name``` ```The channel provided is not valid```')  
   
  const successEmbed = new Discord.RichEmbed()
        .setColor('#73e878')
        .setTitle('`Success`')
        .setDescription('```Leave Channel has been successfully changed```')
  
  if  (!args.join()) return message.channel.send
        (errEmbed2).then
          (message.delete()).then
            (msg => msg.delete(3000));
  
  db.set(`serverSettings_${message.guild.id}`, args[0].slice(2).replace('>', ''), {target: "leaveChannel" }); //Stop overriding Welcome u nub 
  db.fetch(`serverSettings_${message.guild.id}`, { target: "leaveChannel" }).then(s => console.log(s)) // GG
  
      let modlog = message.guild.channels.find(c => c.name, 'moderation-logs');
  
  await modlog.send
        (successEmbed).then
          (message.delete(3000)).then
            (msg => msg.delete(3000))
    return;
   }
  };

exports.conf = { //kk
aliases: ['setlc', 'setleavechannel']
};

exports.help = {
name: 'setlc',
description: 'Set the leave channel!', 
usage: `${process.env.PREFIX}lc <channel name> `
};