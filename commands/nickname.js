const Discord = require(`discord.js`);
  module.exports.run = async (client, message, args) => {
    
    let user = message.guild.member(message.mentions.users.first())
    let newNickname = args.join(' ').slice(22);

  const permError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 01 •')
        .setDescription('```You do not have **MANAGE_NICKNAMES** Permissions```')
    if  (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send
        (permError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const userError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 02 •')
        .setDescription('```You did not supply a user```')
    if  (!user) return message.channel.send
        (userError).then
        (message.delete()).then
        (msg => msg.delete(5000));
    
  const nameError = new Discord.RichEmbed()
        .setColor('#ed455a')
        .setTitle('• Error: 03 •')
        .setDescription('```Nickname was removed...```')
    if  (!newNickname) message.channel.send  
          (nameError).then
          (message.delete()).then
          (msg => msg.delete(5000));
    
    const modlogError = new Discord.RichEmbed()
          .setColor('#ed455a')
          .setTitle('• Error: 04 •')
          .setDescription('```The channel #moderation-logs was not found```')
    

    
  




    
  const modlog = message.guild.channels.find(c => c.name === 'moderation-logs');
    if  (!modlog) return message.channel.send
          (modlogError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  user.setNickname(newNickname)
    message.delete()
  
}  
  exports.conf = {
aliases: ['setnickname', 'nick']
};

exports.help = {
name: 'nickname',
description: 'changes the nickname of selected user', 
usage: `${process.env.PREFIX}nickname @user <new Nickname>`
};