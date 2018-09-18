const db = require ('quick.db');
const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
   
    if(message.author.id == process.env.RAL || message.author.id == process.env.FREAK) { 

   const  errEmbed2 = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('`Error`')
          .setDescription('```Please specify a channel name``` ```The channel provided is not valid```')  
   
  const  successEmbed = new Discord.RichEmbed()
        .setColor('#73e878')
        .setTitle('`Success`')
        .setDescription('```Welcome Channel has been successfully changed```')
  
  if  (!args.join()) return message.channel.send
        (errEmbed2).then
          (message.delete()).then
            (msg => msg.delete(3000));
  
  db.set(`serverSettings_${message.guild.id}`, { welcomeChannel: args[0].slice(2).replace('>', '')} );
  db.fetch(`serverSettings_${message.guild.id}`, { target: "welcomeChannel" }).then(s => console.log(s))
      
  let modlog = message.guild.channels.find(c => c.name, 'moderation-logs');
  await modlog.send
        (successEmbed).then
          (message.delete(3000)).then
            (msg => msg.delete(3000))
    return;
   }
  };

  
exports.conf = {
aliases: ['setwc', 'setwelcomechannel']
};

exports.help = {
name: 'setwc',
description: 'Set the welcome channel!', 
usage: `${process.env.PREFIX}wc <channel name> `
};